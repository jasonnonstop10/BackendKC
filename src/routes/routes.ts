import { Router } from "../../deps.ts";
import { signUp } from "../controller/authController.ts";
const router = new Router();

router
  .get("/", (ctx) => {
    ctx.response.body = "Hello World!";
  })
  .get("/signup", signUp);
export default router;
