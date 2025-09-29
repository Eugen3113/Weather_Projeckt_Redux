import { type ReactNode } from "react"

export type ButtonType = "button" | "submit" | "reset" | undefined

export type ButtonVariant = "save" | "search" | "delete" | undefined;

export interface ButtonProps {
  type?: ButtonType
  variant?: ButtonVariant;
  disabled?: boolean
  name: string
  onClick?: () => void
  children?: ReactNode
}
