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
export declare function buildLog(req: FastifyRequest, reply: FastifyReply, duration: number, includeBody: boolean, serviceName: string): LogEntry;
//# sourceMappingURL=entry.dto.d.ts.map