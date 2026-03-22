export default {
  async fetch(request, env, ctx): Promise<Response> {
    const url = new URL(request.url);

    // Route: GET /api/digest/{edition}
    const digestMatch = url.pathname.match(/^\/api\/digest\/([^/]+)$/);
    if (digestMatch && request.method === "GET") {
      const edition = digestMatch[1];
      return handleDigestRequest(edition, env);
    }

    // Route: GET /api/archive
    if (url.pathname === "/api/archive" && request.method === "GET") {
      return handleArchiveRequest(env);
    }

    return new Response("Not Found", { status: 404 });
  },
};

async function handleDigestRequest(
  edition: string,
  env: { R2_BUCKET_NAME?: string }
): Promise<Response> {
  const bucketName = env.R2_BUCKET_NAME ?? "personal-newsroom-digests";

  try {
    // Try to fetch latest.json for this edition
    const key = `digests/${edition}/latest.json`;
    const object = await env.ASSETS.get(key);

    if (!object) {
      return Response.json(
        { error: "Digest not found", edition },
        { status: 404 }
      );
    }

    const data = await object.json();
    return Response.json(data, {
      headers: {
        "Cache-Control": "public, max-age=300",
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return Response.json(
      { error: "Failed to fetch digest", edition },
      { status: 500 }
    );
  }
}

async function handleArchiveRequest(
  env: { R2_BUCKET_NAME?: string }
): Promise<Response> {
  const bucketName = env.R2_BUCKET_NAME ?? "personal-newsroom-digests";

  try {
    const object = await env.ASSETS.get("editions/index.json");

    if (!object) {
      return Response.json(
        { error: "Archive index not found" },
        { status: 404 }
      );
    }

    const data = await object.json();
    return Response.json(data, {
      headers: {
        "Cache-Control": "public, max-age=3600",
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return Response.json(
      { error: "Failed to fetch archive index" },
      { status: 500 }
    );
  }
}
