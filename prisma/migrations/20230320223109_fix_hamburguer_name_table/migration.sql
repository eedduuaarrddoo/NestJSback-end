/*
  Warnings:

  - You are about to drop the `Hamburguer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Hamburguer";

-- CreateTable
CREATE TABLE "Hamburger" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifiedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Hamburger_pkey" PRIMARY KEY ("id")
);
