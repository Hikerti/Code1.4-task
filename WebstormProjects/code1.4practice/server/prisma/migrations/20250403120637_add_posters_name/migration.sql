/*
  Warnings:

  - You are about to drop the `Posters` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Posters";

-- CreateTable
CREATE TABLE "posters" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "genres" TEXT[]
);

-- CreateIndex
CREATE UNIQUE INDEX "posters_title_key" ON "posters"("title");
