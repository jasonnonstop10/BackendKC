import { Application } from "../../deps.ts";
const app = new Application();
app.use(async (ctx, next) => {
  try {
    ctx.response.status = 200;
    await next();
  } catch (err) {
    throw err;
  }
});
