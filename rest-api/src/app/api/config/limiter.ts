import { RateLimiter } from "limiter";

export const defaultLimiter = new RateLimiter({
  tokensPerInterval: 3,
  interval: "minute",
  fireImmediately: true,
});
