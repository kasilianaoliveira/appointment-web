import { AuthHeader } from "@/components/ui/auth-header"
import { Button } from "@/components/ui/button"
import { GoogleLoginButton } from "@/components/ui/google-login-button"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { useForm } from "@tanstack/react-form"
import { useMutation } from "@tanstack/react-query"
import { Checkbox, Divider, Form, Input, message } from "antd"
import { Link } from "@tanstack/react-router"
import * as z from "zod"

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Digite um e-mail válido.")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Digite um e-mail válido."),
  password: z.string().min(8, "Senha deve ter ao menos 8 caracteres."),
  remember: z.boolean(),
})

type LoginValues = z.infer<typeof loginSchema>

export function LoginForm() {
  const loginMutation = useMutation<LoginValues, Error, LoginValues>({
    mutationFn: async (values) => {
      await new Promise((resolve) => setTimeout(resolve, 650))
      return values
    },
  })

  const initialValues: LoginValues = {
    email: "",
    password: "",
    remember: false,
  }

  const form = useForm({
    defaultValues: initialValues,
    validators: {
      onSubmit: loginSchema,
    },
    onSubmit: async ({ value }) => {
      loginMutation.mutate(value, {
        onSuccess: () => {
          message.success("Login efetuado com sucesso.")
        },
        onError: () => {
          message.error("Não foi possível efetuar o login.")
        },
      })
    },
  })

  return (
    <section className="w-150 bg-red">
      <div className="flex justify-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-primary">KL FIX BYTE</h2>
      </div>

      <AuthHeader
        title="Login"
        description="Entre na sua conta para acessar o painel de agendamentos."
      />

      <div className="">
        <GoogleLoginButton />

        <Divider style={{ borderColor: '#99a1af' }}>Ou</Divider>

        <Form
          name="login"
          layout="vertical"
          onFinish={() => form.handleSubmit()}
          autoComplete="off"
        >
          <form.Field name="email">
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <Form.Item
                  label="Email"
                  validateStatus={isInvalid ? "error" : ""}
                  help={isInvalid ? field.state.meta.errors?.[0]?.message : ""}
                >
                  <Input
                    aria-label="Email"
                    prefix={<UserOutlined />}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    placeholder="teste@gmail.com"
                    size="large"
                  />
                </Form.Item>
              )
            }}
          </form.Field>

          <form.Field name="password">
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <Form.Item
                  label="Senha"
                  validateStatus={isInvalid ? "error" : ""}
                  help={isInvalid ? field.state.meta.errors?.[0]?.message : ""}
                >
                  <Input.Password
                    aria-label="Senha"
                    prefix={<LockOutlined />}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    placeholder="Digite sua senha"
                    size="large"
                  />
                </Form.Item>
              )
            }}
          </form.Field>

          <div className="flex items-center justify-between">
            <form.Field name="remember">
              {(field) => (
                <Checkbox
                  checked={field.state.value}
                  onChange={(e) => field.handleChange(e.target.checked)}
                >
                  Lembrar-me
                </Checkbox>
              )}
            </form.Field>

            <a
              href="/forgot-password"
              className="text-sm font-semibold "
            >
              Esqueci minha senha
            </a>
          </div>

          <div className="mt-6">
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                // size="large"
                loading={loginMutation.status === "pending"}
              >
                {loginMutation.status === "pending" ? "Entrando..." : "Entrar"}
              </Button>
            </Form.Item>
          </div>
        </Form>

        <div className="text-center">
          <span className="text-sm text-gray-400">
            Ainda não tem uma conta?{" "}
            <Link to="/register" className="font-semibold hover:underline">
              Cadastre-se
            </Link>
          </span>
        </div>
      </div>
    </section>
  )
}
