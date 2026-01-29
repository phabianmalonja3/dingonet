/*
  Warnings:

  - You are about to drop the column `fullName` on the `member` table. All the data in the column will be lost.
  - You are about to drop the column `joinedAt` on the `member` table. All the data in the column will be lost.
  - Added the required column `name` to the `Member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Member_email_key` ON `member`;

-- AlterTable
ALTER TABLE `member` DROP COLUMN `fullName`,
    DROP COLUMN `joinedAt`,
    ADD COLUMN `bio` TEXT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `imageUrl` VARCHAR(191) NULL,
    ADD COLUMN `linkedin` VARCHAR(191) NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `order` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `role` VARCHAR(191) NOT NULL,
    ADD COLUMN `twitter` VARCHAR(191) NULL,
    MODIFY `email` VARCHAR(191) NULL;
