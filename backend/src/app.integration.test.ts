import request from "supertest";
import { createApp } from "./app";

describe("createApp (integration)", () => {
  it("responds on /api/health", async () => {
    const app = createApp();
    const res = await request(app).get("/api/health").expect(200);
    expect(res.body).toEqual({ ok: true, service: "portfolio-site-api" });
  });

  it("returns 404 for unknown routes", async () => {
    const app = createApp();
    await request(app).get("/api/not-a-route").expect(404);
  });
});
