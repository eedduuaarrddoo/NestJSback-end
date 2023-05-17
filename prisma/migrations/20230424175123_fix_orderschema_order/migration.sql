/*
  Warnings:

  - A unique constraint covering the columns `[orderId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Additionals" ADD COLUMN     "orderId" INTEGER;

-- AlterTable
ALTER TABLE "Hamburger" ADD COLUMN     "orderId" INTEGER;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "orderId" INTEGER;

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "costomer" TEXT NOT NULL,
    "total" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifiedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_orderId_key" ON "User"("orderId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Additionals" ADD CONSTRAINT "Additionals_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hamburger" ADD CONSTRAINT "Hamburger_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;
