import { LIVE_MATCHES_HOST,LIVE_MATCHES } from "@/constants/URLConstants";

export async function GET() {
  try {
    const response = await fetch(LIVE_MATCHES, {
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY!,
        "X-RapidAPI-Host":LIVE_MATCHES_HOST,
      },
      cache: 'no-store', 
    });

    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Failed to fetch live scores" }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await response.json();
    return Response.json(data); 
  } catch (err) {
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
