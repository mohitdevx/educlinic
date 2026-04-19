import app from './src/app.js';
import { env } from './src/config/env.js';
import { db } from './src/config/db.js';
import { connectRedis } from './src/config/redis.js';

const startAllServices: () => Promise<void> = async () => {
  Promise.all([await db.connect(), await connectRedis()]);
};

startAllServices().then(() => {
  app.listen(env.PORT, () => {
    console.log(`Server is running on port ${env.PORT}`);
  });
});
