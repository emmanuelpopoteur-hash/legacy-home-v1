# Water test landing migration

`/water-test` preserves the current Sites landing page and its three-step lead flow. Its isolated stylesheet and script live under `public/water-test/`; the existing homepage and other routes are unchanged.

The Sites database binding (`DB`) does not carry over to Netlify. Leads submitted through the Next.js page are saved as JSON objects in the site-wide Netlify Blobs store `water-test-leads`, under `YYYY-MM-DD/<id>.json`. Netlify provides the store context to server functions; no storage credential is sent to the browser. The API only reports success after the write is confirmed. If storage fails, `/api/leads` returns 503 and the landing page does not display success.

To view leads: Netlify → project → Data & Storage → Blobs → `water-test-leads`. Each JSON file contains `id`, `created_at`, ZIP, preferred day/time, full name, phone and source. Earlier leads in the Sites D1 table and the Vercel Blob store remain there; this migration does not copy them.

For a manual deploy without GitHub, upload the project source folder to Netlify Drop while signed in, or use Netlify CLI `netlify deploy` to create a draft deploy. Build the Next.js app on Netlify so its server route is included; uploading only static output cannot run `/api/leads`. Before directing campaign traffic to this route: submit a test lead on the deployed preview, retrieve it from the store, verify ZIP/day/time/name/phone, and test that failed persistence leaves the form in its error state. Do not change the live domain until the destination has passed this check.
