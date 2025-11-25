import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { prisma } from "./config/prisma";

const PORT = process.env.PORT || 4000;

async function main() {
  await prisma.$connect();
  console.log("Connected to database");

  const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  const shutdown = async () => {
    console.log("Shutting down...");
    await prisma.$disconnect();
    server.close(() => {
      console.log("Server closed");
      process.exit(0);
    });
  };

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
