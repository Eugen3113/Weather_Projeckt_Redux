import { ButtonComponent } from "./styles"
import { type ButtonProps } from "./types"

function Button({
  type = "button",
  name,
  onClick = () => {},
  children,
  variant = "save",
  disabled = false,
}: ButtonProps) {
  return (
    <ButtonComponent
      disabled={disabled}
      $variant={variant}
      onClick={onClick}
      type={type}
    >
      {/* Улосвный рендеринг */}
      {!children && name}
      {children}
    </ButtonComponent>
  )
}

export default Button
