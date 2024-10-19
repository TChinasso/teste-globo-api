/*
  Warnings:

  - The `access_level` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "access_level",
ADD COLUMN     "access_level" "Role" NOT NULL DEFAULT 'USER';
