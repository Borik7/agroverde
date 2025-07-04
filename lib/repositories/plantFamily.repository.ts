import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const PlantFamilyRepository = {
  getAll: () =>
    prisma.plantFamily.findMany({
      include: {
        Plant: true,
      },
    }),

  getById: (id: string) => prisma.plantFamily.findUnique({ where: { id } }),

  getAllByCategory: (categories: string[]) => {
    return prisma.plantFamily.findMany({
      where: {
        category: { in: categories },
      },
    });
  },

  create: (data: Prisma.PlantFamilyCreateInput) =>
    prisma.plantFamily.create({ data }),

  update: (id: string, data: Prisma.PlantFamilyUpdateInput) =>
    prisma.plantFamily.update({ where: { id }, data }),

  delete: (id: string) => prisma.plantFamily.delete({ where: { id } }),
};
