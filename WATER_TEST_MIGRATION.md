# Water test landing migration

`/water-test` preserves the current Sites landing page and its three-step lead flow. Its isolated stylesheet and script live under `public/water-test/`; the existing homepage and other routes are unchanged.

The Sites database binding (`DB`) does not carry over to Vercel. Leads submitted through the Next.js page are saved as private JSON objects in the Vercel Blob store `legacy-water-test-leads`, under `water-test-leads/YYYY-MM-DD/<id>.json`. The store is linked to the `legacy-home-v1` project in Preview and Production; Vercel supplies `BLOB_STORE_ID` and its short-lived OIDC credential. No storage credential is sent to the browser. If the store is unavailable, `/api/leads` returns 503 and the landing page does not display success.

To view leads: Vercel → `legacy-home-v1` → Storage → `legacy-water-test-leads` → Manage Blobs → `water-test-leads/`. Each private JSON file contains `id`, `created_at`, ZIP, preferred day/time, full name, phone and source. Earlier leads in the Sites D1 `water_test_leads` table remain there; this migration does not copy them.

Before promoting this route: submit a test lead on the deployed preview, retrieve it from the private store, verify ZIP/day/time/name/phone, and test that failed persistence leaves the form in its error state. Then point campaign traffic to the route. Do not change the live domain until the destination has passed this check.
