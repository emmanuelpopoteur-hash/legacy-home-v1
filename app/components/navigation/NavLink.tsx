type NavLinkProps = {
  label: string
  href: string
}

export function NavLink({
  label,
  href,
}: NavLinkProps) {
  return (
    <a
      href={href}
      style={{
        color: "rgba(255,255,255,0.62)",
        fontSize: "14px",
        letterSpacing: "-0.03em",
        transition: "300ms ease",
      }}
    >
      {label}
    </a>
  )
}