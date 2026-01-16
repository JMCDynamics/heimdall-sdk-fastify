# @heimdall-sdk/fastify

> **Requires Sentinel** — this middleware only works when a Sentinel instance is running. It sends request logs and metrics to Sentinel using a buffered, asynchronous mechanism.

Middleware for Fastify to send request logs and basic metrics to Sentinel with minimal overhead.

## Features

- Automatically logs incoming HTTP requests
- Sends logs and metrics to Sentinel asynchronously
- Buffered sending: flush when buffer reaches `flushSize` or after `flushIntervalMs`
- Identify services via `serviceName`

## Installation

```bash
npm install @heimdall-sdk/fastify
```

## Usage

```typescript
import {
  FastifyInstance,
  FastifyPluginAsync,
  RouteShorthandOptions,
} from "fastify";
import { heimdall } from "@heimdall-sdk/fastify";

const opts: RouteShorthandOptions = {
  logLevel: "silent",
};

const app: FastifyPluginAsync = async (server: FastifyInstance) => {
  heimdall(server, {
    serviceName: "my-fastify-service",
    apiKey: "heim_OIYcmz1N2Qz1p0zTxOig77_108dns0FgqUunLJq4_e0", // Replace with your actual API key
    baseUrl: "http://localhost", // Replace with your Sentinel URL
  });

  server.get("/ping", opts, async (request, reply) => {
    return { pong: "it worked!" };
  });

  server.get("/", async (request, reply) => {
    return { message: "Hello, World!" };
  });
};

export default app;
```
