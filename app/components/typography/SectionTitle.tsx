// app/components/typography/SectionTitle.tsx

import { ReactNode } from "react"

interface SectionTitleProps {
  children: ReactNode
}

export function SectionTitle({
  children,
}: SectionTitleProps) {
  return (
    <h2 className="headline-xl">
      {children}
    </h2>
  )
}