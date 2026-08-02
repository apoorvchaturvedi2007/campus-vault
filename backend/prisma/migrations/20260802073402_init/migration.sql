-- CreateEnum
CREATE TYPE "CollegeGender" AS ENUM ('BOYS', 'WOMEN', 'CO_ED');

-- AlterTable
ALTER TABLE "College" ADD COLUMN     "address" TEXT,
ADD COLUMN     "gender" "CollegeGender" NOT NULL DEFAULT 'CO_ED';
