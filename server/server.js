import app from './src/app.js';
import connectDB from './src/config/db.js';
import { env } from './src/config/env.js';

const start = async () => {
  await connectDB();
  app.listen(env.port, () => {
    console.log(`🚀 Server running in ${env.nodeEnv} mode on http://localhost:${env.port}`);
  });
};

start();
