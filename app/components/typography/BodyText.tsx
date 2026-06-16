// app/components/typography/BodyText.tsx

import { ReactNode } from "react"

interface BodyTextProps {
  children: ReactNode
}

export function BodyText({
  children,
}: BodyTextProps) {
  return (
    <p className="body-lg">
      {children}
    </p>
  )
}