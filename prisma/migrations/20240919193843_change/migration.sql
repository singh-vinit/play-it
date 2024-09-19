/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Upvote` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[streamId]` on the table `Upvote` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `extractedId` to the `Stream` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Stream` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Stream" ADD COLUMN     "extractedId" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Upvote_userId_key" ON "Upvote"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Upvote_streamId_key" ON "Upvote"("streamId");
