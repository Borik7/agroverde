const { PrismaClient } = require("@prisma/client");
const fs = require("fs");
const path = require("path");

const prisma = new PrismaClient();

async function main() {
  const regionsSeedFilePath = path.join(__dirname, "regions_seed.json");
  const regionsSeedRaw = fs.readFileSync(regionsSeedFilePath, "utf-8");
  const regionsSeedData = JSON.parse(regionsSeedRaw);

  for (const region of regionsSeedData) {
    const soilType = await prisma.soil.upsert({
      where: { name: region.soilType },
      update: {},
      create: { name: region.soilType },
    });

    await prisma.regions.create({
      data: {
        name: region.name,
        area: region.area,
        latitude: region.latitude,
        longitude: region.longitude,
        temperature: region.temperature,
        rainfall: region.rainfall,
        humidity: region.humidity,
        season: region.season,
        soilId: soilType.id,
        winterTemperature: region.winterTemperature,
      },
    });
  }

  const plantsSeedFilePath = path.join(__dirname, "plants_seed.json");
  const plantsSeedRaw = fs.readFileSync(plantsSeedFilePath, "utf-8");
  const plantsSeedData = JSON.parse(plantsSeedRaw);

  for (const plant of plantsSeedData) {
    const plantFamily = await prisma.plantFamily.upsert({
      where: { name: plant.plantFamily.name },
      update: {},
      create: {
        name: plant.plantFamily.name,
        category: plant.plantFamily.category,
      },
    });

    const createdPlant = await prisma.plant.create({
      data: {
        name: plant.name,
        plantFamilyId: plantFamily.id,
        minTemperature: plant.minTemperature,
        maxTemperature: plant.maxTemperature,
        minPrecipitation: plant.minPrecipitation,
        maxPrecipitation: plant.maxPrecipitation,
        imagePath: plant.imagePath,
        category: plant.category,
        family: plant.family,
        description: plant.description,
        winterProtection: plant.winterProtection,
        airHumidity: plant.airHumidity,
        sunRequirement: plant.sunRequirement,
        depthOfGroundwater: plant.depthOfGroundwater,
        seaLevel: plant.seaLevel,
        growingSeason: plant.growingSeason,
        fertilityBegins: plant.fertilityBegins,
        averageYield: plant.averageYield,
        frostResistance: plant.frostResistance,
        susceptibilityToDiseases: plant.susceptibilityToDiseases,
      },
    });
    for (const soil of plant.soilType) {
      const soilType = await prisma.soil.upsert({
        where: { name: soil },
        update: {},
        create: { name: soil },
      });

      await prisma.soilAndPlant.create({
        data: {
          plantId: createdPlant.id,
          soilId: soilType.id,
        },
      });
    }
  }
}

main()
  .then(() => {
    console.log("✅ Database seeded");
    return prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    return prisma.$disconnect();
  });
