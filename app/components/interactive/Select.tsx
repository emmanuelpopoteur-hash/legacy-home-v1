// app/components/interactive/Select.tsx

import { SelectHTMLAttributes } from "react"

interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {}

export function Select(props: SelectProps) {
  return (
    <select
      className="input"
      {...props}
    />
  )
}