import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

neonConfig.webSocketConstructor = ws;

// Check if DATABASE_URL exists - if not, we'll use memory storage
let pool;
let db;

try {
  if (process.env.DATABASE_URL) {
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
    db = drizzle({ client: pool, schema });
    console.log("Using PostgreSQL database connection");
  } else {
    console.log("No DATABASE_URL found, using memory storage");
    // Create a minimal placeholder for the db object
    // The actual in-memory implementation will be in storage.ts
    db = null;
  }
} catch (error) {
  console.error("Error connecting to database:", error);
  console.log("Falling back to memory storage");
  db = null;
}

export { pool, db };