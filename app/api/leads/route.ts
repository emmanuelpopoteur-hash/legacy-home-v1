const response = (body: object, status: number) =>
  Response.json(body, { status, headers: { "cache-control": "no-store" } });

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return response({ error: "Invalid JSON" }, 400);
  }

  const zip = String(data?.zip ?? "").trim();
  const preferredDay = String(data?.preferred_day ?? "");
  const preferredTime = String(data?.preferred_time ?? "");
  const fullName = String(data?.full_name ?? "").trim();
  const phone = String(data?.phone ?? "").trim();
  if (
    !/^(32|33|34)\d{3}$/.test(zip) ||
    !["Weekday", "Weekend"].includes(preferredDay) ||
    !["Morning", "Afternoon", "Evening"].includes(preferredTime) ||
    fullName.length < 2 || fullName.length > 100 ||
    phone.length > 24 || phone.replace(/\D/g, "").length < 10
  ) return response({ error: "Invalid lead details" }, 400);

  // A configured destination must acknowledge a durable save with saved:true.
  // Never report success if the destination is absent or merely accepts a request.
  const destination = process.env.WATER_TEST_LEADS_API_URL;
  if (!destination) return response({ error: "Storage unavailable" }, 503);
  try {
    const upstream = await fetch(destination, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...(process.env.WATER_TEST_LEADS_API_TOKEN
          ? { authorization: `Bearer ${process.env.WATER_TEST_LEADS_API_TOKEN}` }
          : {}),
      },
      body: JSON.stringify({
        zip,
        preferred_day: preferredDay,
        preferred_time: preferredTime,
        full_name: fullName,
        phone,
        source: "water-test-qr",
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });
    if (!upstream.ok) return response({ error: "Unable to save request" }, 503);
    const result = await upstream.json();
    if (result?.saved !== true || typeof result.id !== "string" || !result.id)
      return response({ error: "Save not confirmed" }, 503);
    return response({ id: result.id, saved: true }, 201);
  } catch {
    return response({ error: "Unable to save request" }, 503);
  }
}
