-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: barbershop
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `numero` varchar(20) DEFAULT NULL,
  `cpf` varchar(14) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `data_nascimento` date DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `imagem_url` varchar(255) DEFAULT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (4,'joao gabrel','5581986819893','71417748400','Mulekin9910@gmail.com','2000-02-20','$2b$10$dI7/jVR2ncYh2vzWAqExLefZAXckplvgAe87c696veBLy54w0s3rm',NULL,'1744826241460.png'),(5,'mateus rafa','5581986819893','71417748400','Mateus.rafael.doc@gmail.com','2000-02-20','$2b$10$u1x4Ok3wPuaXVDp7Ta.qX.LBYZ/R7HfJxfHKBdiwpFJ3gmGTVfIj.',NULL,'1744828342003.png'),(6,'jgbarbosac32 qwdaa','5581986819893','71417748400','jgbarbosac32@gmail.com','2000-02-20','$2b$10$OjvENxH/jMcO4q6WWCG4i.M/pp.Ys5DCRY1tH2cZByCdSjimwTLWS',NULL,'http://localhost:3000/uploads/1745547943897.png'),(7,'jgbarbosac32 qwdaa','5581986819893','71417748400','Mateus.Rafael.dowsc@gmail.com','2000-02-20','$2b$10$2Vs5TJ7Fjja6QmdGqgjG2ultV0yfCn0zB5YZhOKzp0rb0qT2hyu5W',NULL,NULL),(8,'asd sadfsad','5581986819893','71417748400','Mateus.Rafael.doasdc@gmail.com','2000-02-20','$2b$10$1IFGwuNL0zYe1YkVet0mhuKp86pesR6B93CHHBCOXnuGXoVbimLuS',NULL,'http://localhost:3000/uploads/1746145482115.png');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-03 20:52:03
