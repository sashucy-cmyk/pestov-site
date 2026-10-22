export async function onRequest(context) {
  const { env } = context;
  const data = await env.SITE_CONTENT.get("data");

  return new Response(data || "{}", {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
}