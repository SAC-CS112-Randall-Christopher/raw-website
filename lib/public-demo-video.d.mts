export function publicDemoVideo(
  request: Request,
  fetchMedia?: (request: Request) => Promise<Response>,
): Promise<Response | null>;
