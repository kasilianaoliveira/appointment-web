import type { ButtonProps } from "antd"
import { Button as AntdButton } from "antd"

export function Button({ className, ...props }: ButtonProps) {
  const buttonClassName = ["!px-6 !py-5 text-sm! md:text-base!", className].filter(Boolean).join(" ")

  return <AntdButton className={buttonClassName} {...props} />
}
