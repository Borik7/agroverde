import { Prisma } from "@prisma/client";

import { prisma } from "@/lib/prisma";

export const PlantRepository = {
  getAll: () => prisma.plant.findMany(),

  getById: (id: string) => prisma.plant.findUnique({ where: { id } }),

  create: (data: Prisma.PlantCreateInput) => prisma.plant.create({ data }),

  update: (
    id: string,
    data: Partial<Parameters<typeof prisma.plant.update>[0]["data"]>
  ) => prisma.plant.update({ where: { id }, data }),

  delete: (id: string) => prisma.plant.delete({ where: { id } }),

  getManyByAllCategories(
    temperature: number,
    precipitation: number,
    soilId: string
  ) {
    return prisma.plant.findMany({
      where: {
        soilAndPlant: {
          some: { soilId: soilId },
        },
        minTemperature: { lte: temperature },
        maxTemperature: { gte: temperature },
        minPrecipitation: { lte: precipitation },
        maxPrecipitation: { gte: precipitation },
      },
      include: { plantFamily: true },
    });
  },
};
