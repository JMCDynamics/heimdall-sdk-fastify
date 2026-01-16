export function buildLog(req, reply, duration, includeBody, serviceName) {
    const rawPath = req.routeOptions?.url ?? req.url ?? "";
    const fullUrl = `${req.protocol}://${req.hostname}${rawPath}`;
    return {
        serviceName,
        timestamp: Date.now(),
        method: req.method,
        url: fullUrl,
        statusCode: reply.statusCode,
        duration,
        ip: req.headers["x-forwarded-for"] ||
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
//# sourceMappingURL=entry.dto.js.map