export function publicDemoVideo(
  request: Request,
  env: { ASSETS: { fetch(request: Request): Promise<Response> } },
  cache?: { match(request: Request): Promise<Response | undefined>; put(request: Request, response: Response): Promise<void> },
): Promise<Response | null>;
