import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../generated/prisma/client.js';
import { env } from './env.js';

const connectionString: string = `${env.DATABASE_URL}`;

const adapter: PrismaPg = new PrismaPg({ connectionString });
const prisma: PrismaClient = new PrismaClient({ adapter });

const connectDB = async () => {
  try {
    await prisma.$connect();
    await prisma.$queryRaw`SELECT 1`;
    console.log('Connected to database');
  } catch (error) {
    console.error('Error connecting to database', error);
    process.exit(1);
  }
};

export const db = {
  connect: connectDB,
  client: prisma,
};
