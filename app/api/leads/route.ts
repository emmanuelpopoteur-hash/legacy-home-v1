import { getStore } from "@netlify/blobs";

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
  const source = String(data?.source ?? "").trim().toLowerCase();
  const campaignSource = ["tiktok", "instagram", "facebook"].includes(source)
    ? source
    : "direct";
  if (
    !/^(32|33|34)\d{3}$/.test(zip) ||
    !["Weekday", "Weekend"].includes(preferredDay) ||
    !["Morning", "Afternoon", "Evening"].includes(preferredTime) ||
    fullName.length < 2 || fullName.length > 100 ||
    phone.length > 24 || phone.replace(/\D/g, "").length < 10
  ) return response({ error: "Invalid lead details" }, 400);

  try {
    const id = crypto.randomUUID();
    const createdAt = new Date().toISOString();
    const key = `${createdAt.slice(0, 10)}/${id}.json`;
    const result = await getStore("water-test-leads").setJSON(
      key,
      {
        id,
        created_at: createdAt,
        zip,
        preferred_day: preferredDay,
        preferred_time: preferredTime,
        full_name: fullName,
        phone,
        source: `water-test-${campaignSource}`,
      },
      { onlyIfNew: true },
    );
    if (!result.modified || !result.etag) throw new Error("Save not confirmed");
    return response({ id, saved: true }, 201);
  } catch (error) {
    console.error("Lead storage failed", error);
    return response({ error: "Unable to save request" }, 503);
  }
}
