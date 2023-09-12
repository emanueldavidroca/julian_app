-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.28-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for julian_app
CREATE DATABASE IF NOT EXISTS `julian_app` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `julian_app`;

-- Dumping structure for table julian_app.categories
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(50) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table julian_app.categories: ~11 rows (approximately)
REPLACE INTO `categories` (`id`, `categoryName`, `createdAt`, `deletedAt`, `updatedAt`) VALUES
	(1, 'Electro y tecnología', NULL, NULL, NULL),
	(2, 'Bazar y textil', NULL, NULL, NULL),
	(3, 'Almacén', NULL, NULL, NULL),
	(4, 'Bebidas', NULL, NULL, NULL),
	(5, 'Lácteos y productos frescos', NULL, NULL, NULL),
	(6, 'Carnes y pescados', NULL, NULL, NULL),
	(7, 'Frutas y verduras', NULL, NULL, NULL),
	(8, 'Panadería', NULL, NULL, NULL),
	(9, 'Limpieza', NULL, NULL, NULL),
	(10, 'Indumentaria', NULL, NULL, NULL);

-- Dumping structure for table julian_app.orders
CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idUser` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table julian_app.orders: ~0 rows (approximately)

-- Dumping structure for table julian_app.orders_list
CREATE TABLE IF NOT EXISTS `orders_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idProduct` int(11) DEFAULT NULL,
  `idOrder` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table julian_app.orders_list: ~0 rows (approximately)

-- Dumping structure for table julian_app.products
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productName` varchar(50) DEFAULT NULL,
  `description` varchar(50) DEFAULT NULL,
  `barCode` varchar(50) DEFAULT NULL,
  `idCategory` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `img` varchar(50) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table julian_app.products: ~3 rows (approximately)
REPLACE INTO `products` (`id`, `productName`, `description`, `barCode`, `idCategory`, `price`, `img`, `stock`, `createdAt`, `deletedAt`, `updatedAt`) VALUES
	(1, 'logitech g31', NULL, '12312345224', 1, 2000, NULL, 5, NULL, NULL, NULL),
	(2, 'silla gamer', NULL, '636751132', 1, 2300, NULL, 4, NULL, NULL, NULL),
	(3, 'logitech g31', NULL, '12312345224', 1, 100, NULL, 5, NULL, NULL, NULL);

-- Dumping structure for table julian_app.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `rol` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table julian_app.users: ~2 rows (approximately)
REPLACE INTO `users` (`id`, `usuario`, `password`, `email`, `createdAt`, `deletedAt`, `updatedAt`, `rol`) VALUES
	(1, 'julian', '123asd', 'julian@gmail.com', NULL, NULL, NULL, 'administrador');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
