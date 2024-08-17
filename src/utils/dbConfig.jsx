import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
    "postgresql://beat_cancer_owner:eRHdULhMB03t@ep-purple-glade-a53bvkv8.us-east-2.aws.neon.tech/beat_cancer?sslmode=require"
);
export const db = drizzle(sql, { schema });