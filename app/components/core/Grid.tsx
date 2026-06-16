type GridProps = {
  children: React.ReactNode
  className?: string
}

export function Grid({
  children,
  className = "",
}: GridProps) {
  return (
    <div
      className={`
        environment-grid
        ${className}
      `}
    >
      {children}
    </div>
  )
}