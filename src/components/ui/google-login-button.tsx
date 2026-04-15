import { GoogleOutlined } from "@ant-design/icons"
import { Button, message } from "antd"

interface GoogleLoginButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void
}

export function GoogleLoginButton({ onClick }: GoogleLoginButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      message.info("Login com Google ainda não implementado.")
    }
  }

  return (
    <Button
      icon={<GoogleOutlined />}
      type="primary"
      ghost
      size="large"
      className="w-full"
      onClick={handleClick}
    >
      Login com o Google
    </Button>
  )
}