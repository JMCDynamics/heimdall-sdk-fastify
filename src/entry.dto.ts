import type { FastifyReply, FastifyRequest } from "fastify";

export type LogEntry = {
  serviceName: string;
  timestamp: number;
  method: string;
  url: string;
  statusCode: number;
  duration: number;
  ip: string;
  userAgent?: string | string[] | undefined;
  query: Record<string, any>;
  params: Record<string, any>;
  headers: Record<string, any>;
  body?: any;
};

export function buildLog(
  req: FastifyRequest,
  reply: FastifyReply,
  duration: number,
  includeBody: boolean,
  serviceName: string
): LogEntry {
  const rawPath: string = req.routeOptions?.url ?? req.url ?? "";
  const fullUrl = `${req.protocol}://${req.hostname}${rawPath}`;

  return {
    serviceName,
    timestamp: Date.now(),
    method: req.method,
    url: fullUrl,
    statusCode: reply.statusCode,
    duration,
    ip:
      req.headers["x-forwarded-for"] ||
      req.socket.remoteAddress ||
      req.ip ||
      "",
    userAgent: req.headers["user-agent"],
    query: req.query ?? {},
    params: req.params ?? {},
    headers: req.headers ?? {},
    body: includeBody ? req.body : undefined,
  };
}
