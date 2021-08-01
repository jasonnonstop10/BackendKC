import { Router } from "../../deps.ts";
const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello World!";
});

export default router;
