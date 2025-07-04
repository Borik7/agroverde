import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const RegionsRepository = {
  getAll: async () =>
    await prisma.regions.findMany({ include: { soil: true } }),

  getById: (id: string) =>
    prisma.regions.findUnique({ where: { id }, include: { soil: true } }),

  create: (data: Prisma.RegionsCreateInput) => prisma.regions.create({ data }),

  update: (id: string, data: Prisma.RegionsUpdateInput) =>
    prisma.regions.update({ where: { id }, data }),

  delete: (id: string) => prisma.regions.delete({ where: { id } }),
};

export interface Region {
  id: string;
  name: string;
  area: string;
  longitude: string;
  latitude: string;
  temperature: string;
  rainfall: string;
  humidity: string;
  season: string;
  soil: {
    id: string;
    name: string;
  };
}
