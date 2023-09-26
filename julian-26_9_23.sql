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

-- Dumping data for table julian_app.carts: ~4 rows (approximately)
REPLACE INTO `carts` (`id`, `idProduct`, `idUser`, `createdAt`, `updatedAt`, `deletedAt`, `quantity`) VALUES
	(1, 2, 2, '2023-09-19 20:43:34', '2023-09-19 20:43:34', NULL, 1),
	(2, 1, 1, '2023-09-19 20:43:34', '2023-09-19 20:43:34', NULL, 1),
	(3, 1, 2, '2023-09-25 22:53:46', '2023-09-25 22:53:46', NULL, 1),
	(4, 4, 2, '2023-09-26 17:57:15', '2023-09-26 17:57:15', NULL, 1);

-- Dumping data for table julian_app.categories: ~10 rows (approximately)
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

-- Dumping data for table julian_app.orders: ~0 rows (approximately)

-- Dumping data for table julian_app.orders_list: ~0 rows (approximately)

-- Dumping data for table julian_app.products: ~9 rows (approximately)
REPLACE INTO `products` (`id`, `productName`, `description`, `barCode`, `idCategoria`, `price`, `image`, `stock`, `createdAt`, `deletedAt`, `updatedAt`, `status`) VALUES
	(1, 'logitech g31', NULL, '12312345224', 1, 2000, NULL, 5, NULL, NULL, NULL, 'activo'),
	(2, 'silla gamer', NULL, '636751132', 1, 2300, NULL, 4, NULL, NULL, NULL, 'activo'),
	(3, 'logitech g31', NULL, '12312345224', 1, 100, NULL, 5, NULL, NULL, NULL, 'activo'),
	(4, 'prueba', 'qwe', '123456', 1, 10000, NULL, 6, '2023-09-18 20:20:41', NULL, '2023-09-18 20:20:41', 'activo'),
	(6, 'qwe', '1qwekhgqwjkhekj', '2000', 1, 1, NULL, 5, '2023-09-19 19:25:21', NULL, '2023-09-19 19:25:21', NULL),
	(10, 'prueba mouse', 'mouse asd ', '12312312', 3, 12000, '1695494608805--ofertas1.png', 5, '2023-09-23 18:43:28', NULL, '2023-09-23 18:43:28', NULL),
	(11, 'prueba1', 'qwe', '1251654', 3, 2000, '1695752449031--prod2.png', 4, '2023-09-26 18:20:49', NULL, '2023-09-26 18:20:49', NULL),
	(12, 'asd1', 'qwe qwe ', '16564213', 5, 2000, '1695752670540--prod5.png', 30, '2023-09-26 18:24:30', NULL, '2023-09-26 18:24:30', NULL),
	(13, 'algo', 'algo algo algo', '465146516', 4, 1000, '1695753883824--prod6.png', 300, '2023-09-26 18:44:43', NULL, '2023-09-26 18:44:43', NULL);

-- Dumping data for table julian_app.users: ~4 rows (approximately)
REPLACE INTO `users` (`id`, `usuario`, `fullName`, `password`, `email`, `createdAt`, `deletedAt`, `updatedAt`, `rol`) VALUES
	(1, 'julian', NULL, '123asd', 'julian@gmail.com', NULL, NULL, NULL, 'administrador'),
	(2, 'ema', NULL, '123asd', 'ema@gmail.com', '2023-09-18 17:15:47', NULL, NULL, 'cliente'),
	(5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	(6, 'prueba1', 'prueba1', '123asd', 'prueba1@gmail.com', NULL, NULL, NULL, 'cliente');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
