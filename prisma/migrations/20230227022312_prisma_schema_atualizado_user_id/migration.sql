/*
  Warnings:

  - You are about to drop the column `foodsId` on the `users` table. All the data in the column will be lost.
  - Made the column `userId` on table `foods` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_foodsId_fkey`;

-- AlterTable
ALTER TABLE `foods` MODIFY `userId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `foodsId`;

-- AddForeignKey
ALTER TABLE `foods` ADD CONSTRAINT `foods_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
