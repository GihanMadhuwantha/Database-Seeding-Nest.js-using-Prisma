/*
  Warnings:

  - You are about to drop the `Parent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Parent";

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
