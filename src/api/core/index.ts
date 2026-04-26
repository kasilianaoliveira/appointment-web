import axios from "axios"

const apiBaseUrl = import.meta.env.VITE_API_URL ?? "http://localhost:8000"

const isoDateWithTimezonePattern =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/

function normalizeDates<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map((item) => normalizeDates(item)) as T
  }

  if (value && typeof value === "object" && !(value instanceof Date)) {
    const entries = Object.entries(value).map(([key, nestedValue]) => [
      key,
      normalizeDates(nestedValue),
    ])

    return Object.fromEntries(entries) as T
  }

  if (typeof value === "string" && isoDateWithTimezonePattern.test(value)) {
    return new Date(value) as T
  }

  return value
}

export const api = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
})

api.interceptors.response.use((response) => {
  response.data = normalizeDates(response.data)
  return response
})

type ApiErrorPayload = {
  detail?: string | { message?: string }
  message?: string
}

export function getApiErrorMessage(error: unknown, fallback: string) {
  if (axios.isAxiosError<ApiErrorPayload>(error)) {
    const payload = error.response?.data

    if (typeof payload?.detail === "string") {
      return payload.detail
    }

    if (typeof payload?.detail === "object" && payload.detail?.message) {
      return payload.detail.message
    }

    if (typeof payload?.message === "string") {
      return payload.message
    }
  }

  if (error instanceof Error && error.message) {
    return error.message
  }

  return fallback
}

export function buildApiUrl(path: string) {
  return new URL(path, `${apiBaseUrl}/`).toString()
}
