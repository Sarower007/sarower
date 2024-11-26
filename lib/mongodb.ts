// lib/mongodb.ts
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI!);
const dbName = 'sarowerdu';

export const connectToDatabase = async () => {
  if (!client.isConnected()) {
    await client.connect();
  }
  const db = client.db(dbName);
  return { client, db };
};
