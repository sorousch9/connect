-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: connect-app
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `actions`
--

DROP TABLE IF EXISTS `actions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `img` varchar(45) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `userId` int NOT NULL,
  `timestamp` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `userID_idx` (`userId`),
  CONSTRAINT `userID` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actions`
--

LOCK TABLES `actions` WRITE;
/*!40000 ALTER TABLE `actions` DISABLE KEYS */;
INSERT INTO `actions` VALUES (7,'Database Backup Completed','The automated task for database backup has been successfully completed','','2023-05-26 16:46:57',1,NULL),(9,'File Upload Completed','The file upload process has been successfully completed',NULL,'2023-06-01 10:24:32',2,'2023-06-01 10:24:32'),(10,'Email Sent','An email has been successfully sent to the recipient',NULL,'2023-06-02 14:05:19',3,'2023-06-02 14:05:19'),(11,'Payment Processed','The payment transaction has been successfully processed',NULL,'2023-06-03 09:37:45',4,'2023-06-03 09:37:45'),(12,'User Registered','A new user has successfully registered on the platform',NULL,'2023-06-04 18:12:10',5,'2023-06-04 18:12:10'),(13,'Task Completed','The assigned task has been successfully completed',NULL,'2023-06-05 11:58:21',6,'2023-06-05 11:58:21'),(14,'Package Delivered','The package has been successfully delivered to the recipient',NULL,'2023-06-06 16:30:15',7,'2023-06-06 16:30:15'),(15,'Document Signed','The document has been successfully signed by all parties',NULL,'2023-06-07 08:45:59',8,'2023-06-07 08:45:59'),(16,'Website Deployment Completed','The website deployment process has been successfully completed',NULL,'2023-06-08 13:20:42',9,'2023-06-08 13:20:42'),(17,'Product Shipped','The product has been successfully shipped to the customer',NULL,'2023-06-09 17:55:28',10,'2023-06-09 17:55:28');
/*!40000 ALTER TABLE `actions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-07 13:02:40
