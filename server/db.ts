import { PrismaClient } from '../prisma/generated/client'

const db = new PrismaClient();

export default db;