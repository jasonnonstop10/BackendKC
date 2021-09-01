import { Context } from "../../deps.ts";
import { User } from "../model/user.model.ts";
export const signUp = async (ctx: Context) => {
  const { email, password, name, region } = await ctx.request.body().value;
  try {
    let user = await User.insertOne({
      email,
      password,
      name,
      region,
    });
    ctx.response.status = 200;
    ctx.response.body = { user, email, password, name, region };
  } catch (error) {
    ctx.response.status = 500;
    ctx.response.body = { msg: error.message };
  }
};
