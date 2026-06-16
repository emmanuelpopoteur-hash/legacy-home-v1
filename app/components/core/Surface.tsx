type SurfaceProps = {
  children: React.ReactNode
  className?: string
}

export function Surface({
  children,
  className = "",
}: SurfaceProps) {
  return (
    <div
      className={`
        surface-panel
        ${className}
      `}
    >
      {children}
    </div>
  )
}