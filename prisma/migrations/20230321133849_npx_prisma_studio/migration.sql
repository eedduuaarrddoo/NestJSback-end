-- CreateTable
CREATE TABLE "Drinks" (
    "id" SERIAL NOT NULL,
    "price" INTEGER,
    "description" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifiedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Drinks_pkey" PRIMARY KEY ("id")
);
