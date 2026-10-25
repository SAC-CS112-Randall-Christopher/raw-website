export const STUDIO_PREFIX: string;
export function studioGateway(request: Request, env: {DMPH_STUDIO_ORIGIN?: string; DMPH_GATEWAY_TOKEN?: string}, fetchOrigin?: typeof fetch): Promise<Response | null>;
