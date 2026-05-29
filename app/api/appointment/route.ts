import { NextRequest, NextResponse } from "next/server";

const requiredFields = ["service", "name", "phone", "date"] as const;

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Payload invalide." }, { status: 400 });
  }

  for (const field of requiredFields) {
    if (!body[field] || typeof body[field] !== "string") {
      return NextResponse.json({ error: `Champ manquant: ${field}` }, { status: 400 });
    }
  }

  const appointmentId = `GAR-${Date.now().toString(36).toUpperCase()}`;
  const webhookUrl = process.env.N8N_APPOINTMENT_WEBHOOK_URL;

  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-garage-webhook-secret": process.env.GARAGE_WEBHOOK_SECRET ?? "",
      },
      body: JSON.stringify({
        appointmentId,
        source: "garage-antananarivo-showcase",
        receivedAt: new Date().toISOString(),
        ...body,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Le relais reservation est indisponible." }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true, appointmentId });
}
