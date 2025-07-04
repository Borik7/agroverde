import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const SoilRepository = {
  getAll: () => prisma.soil.findMany(),

  getById: (id: string) => prisma.soil.findUnique({ where: { id } }),

  create: (data: Prisma.SoilCreateInput) => prisma.soil.create({ data }),

  update: (id: string, data: Prisma.SoilUpdateInput) =>
    prisma.soil.update({ where: { id }, data }),

  delete: (id: string) => prisma.soil.delete({ where: { id } }),
};
