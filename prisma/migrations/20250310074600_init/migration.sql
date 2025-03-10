-- CreateEnum
CREATE TYPE "UserRoles" AS ENUM ('admin', 'user');

-- CreateEnum
CREATE TYPE "UserGender" AS ENUM ('male', 'female');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('widowed', 'single', 'married');

-- CreateTable
CREATE TABLE "UserCase" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,
    "where" TEXT NOT NULL,
    "case" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "UserCase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserEducationalAttainment" (
    "id" SERIAL NOT NULL,
    "schoolname" TEXT NOT NULL,
    "education" TEXT NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "UserEducationalAttainment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserChildren" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "middlename" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "gender" "UserGender" NOT NULL,
    "userRelationshipId" INTEGER,

    CONSTRAINT "UserChildren_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Position" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "description" TEXT NOT NULL,

    CONSTRAINT "Position_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "description" TEXT NOT NULL,
    "disabled" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "profilePicture" TEXT NOT NULL,
    "username" TEXT,
    "firstname" TEXT,
    "lastname" TEXT,
    "middlename" TEXT,
    "birthday" TIMESTAMP(3) NOT NULL,
    "contact" TEXT NOT NULL,
    "gender" "UserGender" NOT NULL,
    "sss" TEXT,
    "sssimage" TEXT,
    "pagibig" TEXT,
    "pagibigimage" TEXT,
    "tin" TEXT,
    "tinimage" TEXT,
    "psn" TEXT,
    "psnimage" TEXT,
    "philhealth" TEXT,
    "philhealthimage" TEXT,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRoles" NOT NULL DEFAULT 'user',
    "description" TEXT,
    "status" "UserStatus" NOT NULL,
    "positionId" INTEGER NOT NULL,
    "churchId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChurchImage" (
    "id" SERIAL NOT NULL,
    "image" TEXT,
    "churchId" INTEGER,

    CONSTRAINT "ChurchImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Church" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "latitude" INTEGER NOT NULL,
    "longitude" INTEGER NOT NULL,

    CONSTRAINT "Church_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "UserCase" ADD CONSTRAINT "UserCase_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserEducationalAttainment" ADD CONSTRAINT "UserEducationalAttainment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserChildren" ADD CONSTRAINT "UserChildren_userRelationshipId_fkey" FOREIGN KEY ("userRelationshipId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_churchId_fkey" FOREIGN KEY ("churchId") REFERENCES "Church"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChurchImage" ADD CONSTRAINT "ChurchImage_churchId_fkey" FOREIGN KEY ("churchId") REFERENCES "Church"("id") ON DELETE SET NULL ON UPDATE CASCADE;
