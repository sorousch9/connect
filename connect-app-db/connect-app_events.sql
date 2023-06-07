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
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `location` varchar(45) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `eventUserId_idx` (`userId`),
  CONSTRAINT `eventUserId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (1,'Tech Summit','Seattle Convention Center','The Tech Summit is a two-day event that brings together the brightest minds in technology to discuss the latest trends and innovations in the industry.',1),(2,'Virtual Reality Expo','The Futuristic Hub','Step into the future at the Virtual Reality Expo, where cutting-edge VR technologies and experiences will be showcased. Immerse yourself in a world of limitless possibilities.',2),(3,'Artificial Intelligence Symposium','Tech University Auditorium','The Artificial Intelligence Symposium gathers leading experts and researchers to explore the potential of AI and its impact on various industries. Discover how AI is revolutionizing the world.',3),(4,'Innovation Hackathon','Creative Co-Lab Space','Calling all innovators and problem solvers! Join the Innovation Hackathon and collaborate with like-minded individuals to develop groundbreaking solutions to real-world challenges.',4),(5,'Startup Pitch Night','Entrepreneurship Hub','Witness the birth of the next big thing in the startup world at Startup Pitch Night. Promising entrepreneurs will showcase their innovative ideas and compete for funding and recognition.',5),(6,'Data Science Conference','Analytics Center','Join data scientists, analysts, and industry leaders at the Data Science Conference, where the latest trends, tools, and techniques in data analysis and machine learning will be discussed.',6),(7,'Blockchain Summit','Crypto Convention Center','Explore the potential of blockchain technology and its applications across various industries at the Blockchain Summit. Gain insights from experts and discover how blockchain is reshaping the future.',7),(8,'Design Thinking Workshop','Innovation Institute','Unlock your creativity and problem-solving skills at the Design Thinking Workshop. Learn how to approach challenges from a user-centric perspective and develop innovative solutions.',8),(9,'Robotics Expo','Science Museum','Experience the marvels of robotics at the Robotics Expo, where advanced robots and automation technologies will be on display. Witness how robots are revolutionizing industries and shaping the future.',9),(10,'Gaming Convention','Gamers Paradise Expo Center','Calling all gamers! Immerse yourself in the ultimate gaming experience at the Gaming Convention. Try out the latest games, compete in tournaments, and connect with fellow gaming enthusiasts.',10),(11,'Future of Mobility Symposium','City Innovation Hub','Discover the future of transportation at the Future of Mobility Symposium. Explore advancements in electric vehicles, autonomous driving, and sustainable transportation solutions.',11);
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
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
