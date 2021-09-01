import { Router } from "../../deps.ts";
import {
  logIn,
  logOut,
  signUp,
  updateUser,
} from "../controller/authController.ts";
const router = new Router();

router
  .get("/", (ctx) => {
    ctx.response.body = "Hello World!";
  })
  .post("/signup", signUp)
  .post("/login", logIn)
  .put("/update", updateUser)
  .get("/logout", logOut);
export default router;
