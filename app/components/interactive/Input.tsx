// app/components/interactive/Input.tsx

import { InputHTMLAttributes } from "react"

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <input
      className="input"
      {...props}
    />
  )
}