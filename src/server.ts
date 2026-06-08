type ServerEntry = {
  fetch: (request: Request) => Promise<Response> | Response;
};

let entryPromise: Promise<ServerEntry> | undefined;
async function getEntry(): Promise<ServerEntry> {
  if (!entryPromise) {
    entryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => ((m as { default?: ServerEntry }).default ?? (m as unknown as ServerEntry)),
    );
  }
  return entryPromise;
}

export default {
  async fetch(request: Request) {
    try {
      const handler = await getEntry();
      return await handler.fetch(request);
    } catch (error) {
      console.error(error);
      return new Response("Internal Server Error", {
        status: 500,
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    }
  },
};
