-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Lis 13, 2026 at 01:58 PM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zoo`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `klatka`
--

CREATE TABLE `klatka` (
  `nr_klatki` int(11) NOT NULL,
  `nazwa` varchar(20) NOT NULL,
  `powierzchnia` float DEFAULT NULL,
  `wysokosc` float DEFAULT 2.5,
  `typ` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `opiekun`
--

CREATE TABLE `opiekun` (
  `id_opiekuna` int(11) NOT NULL,
  `nazwisko` varchar(20) NOT NULL,
  `imie` varchar(20) NOT NULL,
  `placa` decimal(7,2) DEFAULT NULL,
  `data_zatrudnienia` date NOT NULL,
  `na_zwolnieniu` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `zwierze`
--

CREATE TABLE `zwierze` (
  `nazwa` varchar(20) NOT NULL,
  `gatunek` varchar(20) NOT NULL,
  `zdjecie` blob DEFAULT NULL,
  `rok_rejestracji` year(4) NOT NULL,
  `waga` int(11) DEFAULT NULL,
  `id_opiekuna` int(11) DEFAULT NULL,
  `nr_klatki` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `klatka`
--
ALTER TABLE `klatka`
  ADD PRIMARY KEY (`nr_klatki`);

--
-- Indeksy dla tabeli `opiekun`
--
ALTER TABLE `opiekun`
  ADD PRIMARY KEY (`id_opiekuna`);

--
-- Indeksy dla tabeli `zwierze`
--
ALTER TABLE `zwierze`
  ADD UNIQUE KEY `nazwa` (`nazwa`),
  ADD KEY `id_opiekuna` (`id_opiekuna`),
  ADD KEY `nr_klatki` (`nr_klatki`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `zwierze`
--
ALTER TABLE `zwierze`
  ADD CONSTRAINT `zwierze_ibfk_1` FOREIGN KEY (`id_opiekuna`) REFERENCES `opiekun` (`id_opiekuna`),
  ADD CONSTRAINT `zwierze_ibfk_2` FOREIGN KEY (`nr_klatki`) REFERENCES `klatka` (`nr_klatki`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
