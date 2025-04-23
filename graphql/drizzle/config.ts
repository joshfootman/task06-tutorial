import 'dotenv/config'
import { createClient } from '@libsql/client'
import { drizzle } from 'drizzle-orm/libsql'

if (!process.env.DB_FILE_NAME) {
  throw new Error('Missing environment variable: DB_FILE_NAME')
}

const client = createClient({ url: process.env.DB_FILE_NAME! })
export const db = drizzle({ client, logger: true })
