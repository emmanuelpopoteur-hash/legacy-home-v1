# Water test landing migration

`/water-test` preserves the current Sites landing page and its three-step lead flow. Its isolated stylesheet and script live under `public/water-test/`; the existing homepage and other routes are unchanged.

The Sites database binding (`DB`) is not available in this Next.js deployment. Configure `WATER_TEST_LEADS_API_URL` on the deployment with a server-side HTTPS endpoint that **persists** the lead and responds `2xx` with JSON `{ "saved": true, "id": "<record id>" }` only after the save commits. If that endpoint requires authentication, set `WATER_TEST_LEADS_API_TOKEN` too. The browser never receives these settings. Without a confirmed destination, `/api/leads` returns 503 and the landing page does not display success.

Before promoting this route: submit a test lead on the deployed preview, retrieve it from the destination store, verify ZIP/day/time/name/phone, and test that failed persistence leaves the form in its error state. Then point campaign traffic to the route. Do not change the live domain until the destination has passed this check.
