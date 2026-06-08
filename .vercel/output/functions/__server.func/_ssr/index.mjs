let entryPromise;
async function getEntry() {
  if (!entryPromise) {
    entryPromise = import("./server-DOkz3w8m.mjs").then((n) => n.s).then(
      (m) => m.default ?? m
    );
  }
  return entryPromise;
}
const server = {
  async fetch(request) {
    try {
      const handler = await getEntry();
      return await handler.fetch(request);
    } catch (error) {
      console.error(error);
      return new Response("Internal Server Error", {
        status: 500,
        headers: { "content-type": "text/plain; charset=utf-8" }
      });
    }
  }
};
export {
  server as default
};
