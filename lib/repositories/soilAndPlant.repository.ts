import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const SoilAndPlantRepository = {
  link: (data: Prisma.soilAndPlantCreateInput) =>
    prisma.soilAndPlant.create({ data }),

  unlink: (id: string) => prisma.soilAndPlant.delete({ where: { id } }),

  getByPlant: (plantId: string) =>
    prisma.soilAndPlant.findMany({
      where: { plantId },
      include: { soil: true },
    }),

  getBySoil: (soilId: string) =>
    prisma.soilAndPlant.findMany({
      where: { soilId },
      include: { plant: true },
    }),
};
