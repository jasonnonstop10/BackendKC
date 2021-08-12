import { Application } from "./deps.ts";
import router from "./src/routes/routes.ts";
const port: number = 3000;
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Example app listening at http://localhost:${port}`);
await app.listen({ port });
