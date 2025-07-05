-- CreateTable
CREATE TABLE "plants" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "plantFamilyId" TEXT NOT NULL,
    "min_temperature" INTEGER NOT NULL,
    "max_temperature" INTEGER NOT NULL,
    "min_precipitation" INTEGER NOT NULL,
    "max_precipitation" INTEGER NOT NULL,
    "image_path" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "winter_protection" TEXT NOT NULL,
    "air_humidity" TEXT NOT NULL,
    "sun_requirement" TEXT NOT NULL,
    "depth_of_groundwater" TEXT NOT NULL,
    "sea_level" TEXT NOT NULL,
    "growing_season" TEXT NOT NULL,
    "fertility_begins" TEXT NOT NULL,
    "average_yield" TEXT NOT NULL,
    "frost_resistance" INTEGER NOT NULL,
    "susceptibility_to_diseases" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "plants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plants_family" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "plants_family_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "soils" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "soils_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "soil_and_plants" (
    "id" TEXT NOT NULL,
    "soilId" TEXT NOT NULL,
    "plantId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "soil_and_plants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "regions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "temperature" INTEGER NOT NULL,
    "winterTemperature" INTEGER NOT NULL,
    "rainfall" INTEGER NOT NULL,
    "humidity" TEXT NOT NULL,
    "season" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "soilId" TEXT NOT NULL,

    CONSTRAINT "regions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "plants_family_name_key" ON "plants_family"("name");

-- CreateIndex
CREATE UNIQUE INDEX "soils_id_key" ON "soils"("id");

-- CreateIndex
CREATE UNIQUE INDEX "soils_name_key" ON "soils"("name");

-- CreateIndex
CREATE UNIQUE INDEX "regions_id_key" ON "regions"("id");

-- AddForeignKey
ALTER TABLE "plants" ADD CONSTRAINT "plants_plantFamilyId_fkey" FOREIGN KEY ("plantFamilyId") REFERENCES "plants_family"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "soil_and_plants" ADD CONSTRAINT "soil_and_plants_soilId_fkey" FOREIGN KEY ("soilId") REFERENCES "soils"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "soil_and_plants" ADD CONSTRAINT "soil_and_plants_plantId_fkey" FOREIGN KEY ("plantId") REFERENCES "plants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "regions" ADD CONSTRAINT "regions_soilId_fkey" FOREIGN KEY ("soilId") REFERENCES "soils"("id") ON DELETE CASCADE ON UPDATE CASCADE;
