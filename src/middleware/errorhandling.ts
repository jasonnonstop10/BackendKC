import { Application, isHttpError, Status } from "../../deps.ts";
const app = new Application();
app.use(async (ctx, next) => {
  try {
    ctx.response.headers.set("Content-Type", "application/json");
    await next();
  } catch (err) {
    ctx.response.status = err.status;
    ctx.response.body = { message: err.message, stack: err.stack };
  }
});
