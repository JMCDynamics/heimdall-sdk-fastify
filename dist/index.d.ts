import type { FastifyInstance } from "fastify";
export interface LoggerOptions {
    enabled?: boolean;
    includeBody?: boolean;
    baseUrl: string;
    serviceName: string;
    apiKey: string;
    flushIntervalMs?: number;
    flushSize?: number;
    maxBufferSize?: number;
    developerMode?: boolean;
}
export declare function heimdall(server: FastifyInstance, options: LoggerOptions): void;
//# sourceMappingURL=index.d.ts.map