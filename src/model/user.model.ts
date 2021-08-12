import db from "../../db.ts";

interface UserModel {
  name: string;
  email: string;
  password: string;
  region: string;
  createdAt: Date;
  updatedAt: Date;
}
const User = db.collection<UserModel>("user");
export { User };
