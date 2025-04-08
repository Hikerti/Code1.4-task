-- CreateTable
CREATE TABLE "Posters" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "genres" TEXT[]
);

-- CreateIndex
CREATE UNIQUE INDEX "Posters_title_key" ON "Posters"("title");
