import { landingHtml } from "./landing";

// Keep the landing document isolated from the existing Next.js homepage/styles.
export function GET() {
  return new Response(landingHtml, {
    headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" },
  });
}
