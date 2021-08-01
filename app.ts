import { Application } from "./deps.ts";
import router from "./src/routes/index.js";
const app = new Application();
app.use(router.routes());
await app.listen({ port: 5000 });
