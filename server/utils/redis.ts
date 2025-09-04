import { Redis } from "ioredis";
require("dotenv").config();

const redisClient = () => {
  return "rediss://default:AXAXAAIncDFlZGQ0ZDFlOTNjYmQ0Y2UwYTY5NmRlNDQzYzk3OTgxNnAxMjg2OTU@upward-boa-28695.upstash.io:6379";
};

export const redis = new Redis(redisClient());
