import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
import cors from "@fastify/cors";

const app = fastify();
const prisma = new PrismaClient();

app.register(cors);
app.get("/", () => {
  return prisma.habit.findMany();
});

app.listen({
  port: 3333,
});
