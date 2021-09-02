import { bcrypt, Context, objectId } from "../../deps.ts";
import { User } from "../model/user.model.ts";
export const signUp = async (ctx: Context) => {
  let { _id, email, password, name, region } = await ctx.request.body().value;
  const salt = bcrypt.genSaltSync(10);
  const hashpassword = await bcrypt.hash(password, salt);
  const user = await User.insertOne({
    _id: objectId(_id),
    email,
    password: hashpassword,
    name,
    region,
    created_at: new Date(),
    update_at: new Date(),
  });
  ctx.response.status = 200;
  ctx.response.body = { email, password, name, region };
};
export const logIn = async (ctx: Context) => {
  const { _id, email, password } = await ctx.request.body().value;
  try {
    const user = await User.findOne(
      { email },
      { noCursorTimeout: false } as any,
    );
    if (!user) {
      ctx.response.status = 404;
      ctx.response.body = { msg: "User not found" };
      return;
    }
    if (user.password !== password) {
      ctx.response.status = 401;
      ctx.response.body = { msg: "Wrong password" };
      return;
    }
    ctx.response.status = 200;
    ctx.response.body = { _id, email, password };
  } catch (err) {
    ctx.response.status = 500;
    ctx.response.body = { msg: err.message };
  }
};
export const updateUser = async (ctx: Context) => {
  const { _id, email, password, name, region } = await ctx.request.body().value;
  const user = await User.updateOne({ email }, {
    $set: {
      password,
      name,
      region,
      update_at: new Date(),
    },
  });
  ctx.response.status = 200;
  ctx.response.body = { _id, email, password, name, region };
};
export const logOut = async (ctx: Context) => {
  ctx.response.status = 200;
  ctx.response.body = { msg: "Sign out success" };
};
