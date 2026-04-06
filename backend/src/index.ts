import { createApp } from "./app";

const port = Number(process.env.PORT ?? 3050);
const app = createApp();

app.listen(port, () => {
  console.log(`portfolio-site-api listening on http://localhost:${port}`);
});
