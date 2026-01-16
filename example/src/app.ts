import {
  FastifyInstance,
  FastifyPluginAsync,
  RouteShorthandOptions,
} from "fastify";
import { heimdall } from "../../dist";

const opts: RouteShorthandOptions = {
  logLevel: "silent",
};

const app: FastifyPluginAsync = async (server: FastifyInstance) => {
  heimdall(server, {
    serviceName: "my-fastify-service",
    apiKey: "heim_OIYcmz1N2Qz1p0zTxOig77_108dns0FgqUunLJq4_e0",
    baseUrl: "http://localhost",
  });

  server.get("/ping", opts, async (request, reply) => {
    return { pong: "it worked!" };
  });

  server.get("/", async (request, reply) => {
    return { message: "Hello, World!" };
  });

  server.get("/teste", async (request, reply) => {
    throw new Error("Testing error monitoring");
  });
};

export default app;
