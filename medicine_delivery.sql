-- -------------------------------------------------------------
-- TablePlus 5.9.0(538)
--
-- https://tableplus.com/
--
-- Database: medicine_delivery
-- Generation Time: 2024-03-11 21:44:10.3960
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `timestamp` bigint NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) NOT NULL,
  `userEmail` varchar(255) NOT NULL,
  `userAddress` varchar(255) NOT NULL,
  `userPhone` varchar(255) NOT NULL,
  `totalPrice` double NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `order_item`;
CREATE TABLE `order_item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity` int NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `productId` int NOT NULL,
  `orderId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_904370c093ceea4369659a3c810` (`productId`),
  KEY `FK_646bf9ece6f45dbe41c203e06e0` (`orderId`),
  CONSTRAINT `FK_646bf9ece6f45dbe41c203e06e0` FOREIGN KEY (`orderId`) REFERENCES `order` (`id`),
  CONSTRAINT `FK_904370c093ceea4369659a3c810` FOREIGN KEY (`productId`) REFERENCES `product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `isFavorite` tinyint NOT NULL,
  `imgPath` varchar(255) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `shopId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_1c4b1934c3e8c5b69b3d3d311d6` (`shopId`),
  CONSTRAINT `FK_1c4b1934c3e8c5b69b3d3d311d6` FOREIGN KEY (`shopId`) REFERENCES `shop` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `shop`;
CREATE TABLE `shop` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `migrations` (`id`, `timestamp`, `name`) VALUES
(1, 1710096248017, 'Migration1710096248017');

INSERT INTO `product` (`id`, `name`, `price`, `isFavorite`, `imgPath`, `createdAt`, `shopId`) VALUES
(1, 'paracetamol', 122.05, 0, 'img/medicine.png', '2024-03-10 21:07:32.283628', 1),
(2, 'ibuprofen', 100, 0, 'img/medicine.png', '2024-03-10 21:07:32.283628', 1),
(3, 'vitamin d', 20, 0, 'img/medicine.png', '2024-03-11 09:29:51.109375', 2),
(4, 'nimesulid', 100, 1, 'img/medicine.png', '2024-03-11 09:35:06.119799', 1),
(5, 'vitamin b12', 50, 0, 'img/medicine.png', '2024-03-11 09:35:06.121612', 1),
(6, 'hofitol', 150, 0, 'img/medicine.png', '2024-03-11 09:35:06.123265', 1),
(7, 'aspirun', 75, 0, 'img/medicine.png', '2024-03-11 09:35:06.124052', 2),
(8, 'paracetamol', 120, 0, 'img/medicine.png', '2024-03-11 09:35:06.124459', 2),
(9, 'paracetamol', 100, 0, 'img/medicine.png', '2024-03-11 09:37:52.757691', 3),
(10, 'vitamin d', 25, 0, 'img/medicine.png', '2024-03-11 09:37:52.758242', 3),
(11, 'magne b6', 40, 0, 'img/medicine.png', '2024-03-11 09:37:52.758601', 3),
(12, 'magne b6', 50, 0, 'img/medicine.png', '2024-03-11 09:37:52.758999', 1),
(13, 'melatonin', 300, 0, 'img/medicine.png', '2024-03-11 09:37:52.759526', 1),
(14, 'iodine tyrosin', 200, 0, 'img/medicine.png', '2024-03-11 09:37:52.759902', 1);

INSERT INTO `shop` (`id`, `name`, `createdAt`) VALUES
(1, 'Drugs 24', '2024-03-10 21:02:17.482382'),
(2, 'Pharmacy', '2024-03-10 21:02:36.242992'),
(3, 'Likki.24', '2024-03-11 09:35:37.907572');



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;