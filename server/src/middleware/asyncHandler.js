// Wraps async controllers so rejected promises are forwarded to the
// error handler instead of crashing the process — no try/catch boilerplate.
export const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);
