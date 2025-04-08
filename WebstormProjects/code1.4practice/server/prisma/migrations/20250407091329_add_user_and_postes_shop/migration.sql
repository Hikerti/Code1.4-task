-- CreateTable
CREATE TABLE "posters_shop" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "genres" TEXT[]
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "patronymic" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "password_repeat" TEXT NOT NULL,
    "rules" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "posters_shop_title_key" ON "posters_shop"("title");

-- CreateIndex
CREATE UNIQUE INDEX "user_login_key" ON "user"("login");
