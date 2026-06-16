import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right, #02142b, #05254d, #0b1d35)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "900px" }}>
        <p
          style={{
            letterSpacing: "4px",
            color: "#5eb6ff",
            marginBottom: "20px",
            fontSize: "14px",
          }}
        >
          LEGACY WATER USA
        </p>

        <h1
          style={{
            fontSize: "clamp(54px, 10vw, 110px)",
            lineHeight: "0.95",
            fontWeight: 700,
            marginBottom: "30px",
          }}
        >
          Choose Your Language
        </h1>

        <p
          style={{
            fontSize: "20px",
            opacity: 0.85,
            lineHeight: 1.6,
            marginBottom: "60px",
          }}
        >
          Premium Florida water wellness, complimentary water analysis,
          homeowner education, and professionally installed Ecoverse systems.
        </p>

        <div
          style={{
            display: "flex",
            gap: "24px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/en"
            style={{
              padding: "18px 38px",
              borderRadius: "999px",
              background: "#0d6efd",
              color: "white",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "18px",
            }}
          >
            🇺🇸 English
          </Link>

          <Link
            href="/es"
            style={{
              padding: "18px 38px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "18px",
              background: "rgba(255,255,255,0.05)",
            }}
          >
            🇪🇸 Español
          </Link>
        </div>
      </div>
    </main>
  );
}