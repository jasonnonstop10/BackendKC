import { config, MongoClient } from "./deps.ts";
await config({ export: true });

const cilent = new MongoClient();
await cilent.connect(
  config().DB_URL,
);
console.log("database connecting");
const db = cilent.database("kasetchana");
export default db;
