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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  `name` varchar(45) NOT NULL,
  `coverPic` varchar(300) DEFAULT NULL,
  `profilePhoto` varchar(300) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `language` varchar(45) DEFAULT NULL,
  `facebook` varchar(45) DEFAULT NULL,
  `github` varchar(45) DEFAULT NULL,
  `branch` varchar(45) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'soroush','test@gmail.com','$2a$10$y2GPJanmkn9aoglP7Tfnqe9uPGPaYqPw3MXeaKFkWnK7kQrr3aVlS','Soroush Saara','https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Germany','Persisch,Deutsch','rar','git','It','Developer'),(2,'shirin','test2@gmail.com','$2a$10$fAX4H4sr7xS5z41Ijlkp.egG4CE0j1IncPirwN4glRYb7DCB62laa','Shirin Aram','https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/16946736/pexels-photo-16946736/free-photo-of-young-woman-sitting-on-couch-drinking-from-mug.jpeg?auto=compress&cs=tinysrgb&w=1600','USA','Englich',NULL,'shirin','Product Management',NULL),(3,'Sara','tsara@gmail.com','test123','Sara Ram','https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/4169899/pexels-photo-4169899.jpeg?auto=compress&cs=tinysrgb&w=1600','Korea','English','sara','sara','Desigen','Photographer'),(4,'John','john@example.com','test123','John Smith','https://images.pexels.com/photos/543210/pexels-photo-543210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1600','United States','English','john','john','Software Engineering','Developer'),(5,'Emily','emily@example.com','test123','Emily Johnson','https://images.pexels.com/photos/543210/pexels-photo-543210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1600','Canada','English','emily','emily','Marketing','Manager'),(6,'Michael','michael@example.com','test123','Michael Brown','https://images.pexels.com/photos/246810/pexels-photo-246810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/5795034/pexels-photo-5795034.jpeg?auto=compress&cs=tinysrgb&w=1600','Australia','English','michael','michael','Finance','Analyst'),(7,'Emma','emma@example.com','test123','Emma Davis','https://images.pexels.com/photos/135792/pexels-photo-135792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/5795040/pexels-photo-5795040.jpeg?auto=compress&cs=tinysrgb&w=1600','United Kingdom','English','emma','emma','Human Resources','Coordinator'),(8,'Daniel','daniel@example.com','test123','Daniel Wilson','https://images.pexels.com/photos/246810/pexels-photo-246810.jpeg\n?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/13326901/pexels-photo-13326901.jpeg?auto=compress&cs=tinysrgb&w=1600','Canada','English','daniel','daniel','Product Management','Consultant'),(9,'Sophia','sophia@example.com','test123','Sophia Lee','https://images.pexels.com/photos/987654/pexels-photo-987654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/1253664/pexels-photo-1253664.jpeg?auto=compress&cs=tinysrgb&w=1600','United States','English','sophia','sophia','Sales','Representative'),(10,'Noah','noah@example.com','test123','Noah Thompson','https://images.pexels.com/photos/543210/pexels-photo-543210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/5984432/pexels-photo-5984432.jpeg?auto=compress&cs=tinysrgb&w=1600','Australia','English','noah','noah','Operations','Manager'),(11,'Olivia','olivia@example.com','test123','Olivia Martinez','https://images.pexels.com/photos/246810/pexels-photo-246810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/10837084/pexels-photo-10837084.jpeg?auto=compress&cs=tinysrgb&w=1600','United States','English','olivia','olivia','Marketing','Coordinator'),(12,'Liam','liam@example.com','test123','Liam Turner','https://images.pexels.com/photos/135792/pexels-photo-135792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/15422042/pexels-photo-15422042/free-photo-of-black-and-white-fashion-man-people.jpeg?auto=compress&cs=tinysrgb&w=1600','United Kingdom','English','liam','liam','Software Engineering','Engineer');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
