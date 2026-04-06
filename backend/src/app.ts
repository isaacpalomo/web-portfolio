import "dotenv/config";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import { healthPayload } from "./healthPayload";

export function createApp() {
  const app = express();
  app.use(helmet());
  app.use(cors({ origin: process.env.CORS_ORIGIN ?? true }));
  app.use(express.json());

  app.get("/api/health", (_req, res) => {
    res.json(healthPayload());
  });

  return app;
}
