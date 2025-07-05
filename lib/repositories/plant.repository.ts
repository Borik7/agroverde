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

  async getManyByAllCategories(
    temperature: number,
    winterTemperature: number,
    precipitation: number,
    soilId: string
  ) {
    const fruitsAndBerries = await prisma.plant.findMany({
      where: {
        soilAndPlant: {
          some: { soilId },
        },
        minTemperature: { lte: temperature },
        maxTemperature: { gte: temperature },
        minPrecipitation: { lte: precipitation },
        maxPrecipitation: { gte: precipitation },
        frostResistance: { lte: winterTemperature },
        plantFamily: {
          category: {
            in: ["Միրգ", "Հատապտուղ"],
          },
        },
      },
      include: { plantFamily: true },
    });

    const others = await prisma.plant.findMany({
      where: {
        soilAndPlant: {
          some: { soilId },
        },
        minTemperature: { lte: temperature },
        maxTemperature: { gte: temperature },
        minPrecipitation: { lte: precipitation },
        maxPrecipitation: { gte: precipitation },
        plantFamily: {
          category: {
            notIn: ["Միրգ", "Հատապտուղ"],
          },
        },
      },
      include: { plantFamily: true },
    });

    return [...fruitsAndBerries, ...others];
  },
};
