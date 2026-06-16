// app/components/typography/Display.tsx

import { ReactNode } from "react"

interface DisplayProps {
  children: ReactNode
}

export function Display({
  children,
}: DisplayProps) {
  return (
    <h1 className="display">
      {children}
    </h1>
  )
}