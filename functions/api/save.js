export async function onRequestPost(context) {
  const { request, env } = context;
  const body = await request.text();

  await env.SITE_CONTENT.put("data", body);

  return new Response(JSON.stringify({ success: true }), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
}