import { AuthHeader } from "@/components/ui/auth-header"
import { Button } from "@/components/ui/button"
import { GoogleLoginButton } from "@/components/ui/google-login-button"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { useForm } from "@tanstack/react-form"
import { Checkbox, Divider, Form, Input } from "antd"
import * as z from "zod"

const registerSchema = z.object({
  name: z.string().min(2, "Nome deve ter ao menos 2 caracteres."),
  email: z
    .string()
    .min(1, "Digite um e-mail válido.")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Digite um e-mail válido."),
  password: z.string().min(6, "Senha deve ter ao menos 6 caracteres."),
  confirmPassword: z.string().min(6, "Confirmação de senha deve ter ao menos 6 caracteres."),
  terms: z.boolean().refine(val => val === true, "Você deve aceitar os termos de uso."),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"],
})

type RegisterValues = z.infer<typeof registerSchema>

export function RegisterForm() {
  // const registerMutation = useMutation<RegisterValues, Error, RegisterValues>({
  //   mutationFn: async (values) => {
  //     await new Promise((resolve) => setTimeout(resolve, 650))
  //     // Remove confirmPassword before sending to backend
  //     const { confirmPassword, ...dataToSend } = values
  //     return dataToSend
  //   },
  // })

  const initialValues: RegisterValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  }

  const form = useForm({
    defaultValues: initialValues,
    validators: {
      onSubmit: registerSchema,
    },
    onSubmit: async () => {
      console.log("criou")
      //   registerMutation.mutate(value, {
      //     onSuccess: () => {
      //       message.success("Conta criada com sucesso!")
      //     },
      //     onError: () => {
      //       message.error("Não foi possível criar a conta.")
      //     },
      //   })
      // },
    },
  })

  return (
    <section className="w-150">
      <div className="flex justify-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-primary">KL FIX BYTE</h2>
      </div>

      <AuthHeader
        title="Criar conta"
        description="Cadastre-se para acessar o painel de agendamentos."
      />

      <div className="">
        <GoogleLoginButton />

        <Divider style={{ borderColor: '#99a1af' }}>Ou</Divider>


        <Form
          name="register"
          layout="vertical"
          onFinish={() => form.handleSubmit()}
          autoComplete="off"
        >
          <form.Field name="name">
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <Form.Item
                  label="Nome completo"
                  validateStatus={isInvalid ? "error" : ""}
                  help={isInvalid ? field.state.meta.errors?.[0]?.message : ""}
                >
                  <Input
                    prefix={<UserOutlined />}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    placeholder="Seu nome completo"
                    size="large"
                    className=""
                  />
                </Form.Item>
              )
            }}
          </form.Field>

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

          <form.Field name="confirmPassword">
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <Form.Item
                  label="Confirmar senha"
                  validateStatus={isInvalid ? "error" : ""}
                  help={isInvalid ? field.state.meta.errors?.[0]?.message : ""}
                >
                  <Input.Password
                    prefix={<LockOutlined />}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    placeholder="Digite novamente sua senha"
                    size="large"
                  />
                </Form.Item>
              )
            }}
          </form.Field>

          <form.Field name="terms">
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <Form.Item
                  validateStatus={isInvalid ? "error" : ""}
                  help={isInvalid ? field.state.meta.errors?.[0]?.message : ""}
                >
                  <Checkbox
                    checked={field.state.value}
                    onChange={(e) => field.handleChange(e.target.checked)}
                  >
                    Aceito os{" "}
                    <a href="/terms">
                      termos de uso
                    </a>{" "}
                    e{" "}
                    <a href="/privacy">
                      política de privacidade
                    </a>
                  </Checkbox>
                </Form.Item>
              )
            }}
          </form.Field>

          <div className="mt-6">
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                size="large"
              // loading={registerMutation.status === "pending"}
              >
                Criar conta
              </Button>
            </Form.Item>
          </div>
        </Form>

        <div className="text-center">
          <span className="text-sm text-gray-400">
            Já tem uma conta?{" "}
            <a
              href="/login"
              className="font-semibold hover:underline"
            >
              Faça login
            </a>
          </span>
        </div>
      </div>
    </section>
  )
}
