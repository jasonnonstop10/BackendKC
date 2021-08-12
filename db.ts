import { MongoClient } from "./deps.ts";
const cilent = new MongoClient();
await cilent.connect(
  "mongodb+srv://admin:KeV0proZb0kSLDZY@kasetchana.5fofn.mongodb.net/kasetchana?authMechanism=SCRAM-SHA-1",
);
console.log("database connecting");
const db = cilent.database("kasetchana");
export { db };
