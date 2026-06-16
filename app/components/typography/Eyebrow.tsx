// app/components/typography/Eyebrow.tsx

import { ReactNode } from "react"

interface EyebrowProps {
  children: ReactNode
}

export function Eyebrow({
  children,
}: EyebrowProps) {
  return (
    <div className="label">
      {children}
    </div>
  )
}