import { Application, parse } from "./deps.ts";
import router from "./src/routes/routes.ts";
const { args } = Deno;
const DEFAULT_PORT = 8000;
const argPort = parse(args).port;

const app = new Application();
app.addEventListener("error", (evt) => {
  console.log(evt.error);
});
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: argPort ?? DEFAULT_PORT });
console.log(`Example app listening at http://localhost:${DEFAULT_PORT}`);
