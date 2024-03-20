-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 20, 2024 at 11:46 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `medicalappoinementsystem`
--
CREATE DATABASE IF NOT EXISTS `medicalappoinementsystem` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `medicalappoinementsystem`;

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `id` int(11) NOT NULL,
  `email` text NOT NULL,
  `matkhau` text NOT NULL,
  `quyen` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`id`, `email`, `matkhau`, `quyen`) VALUES
(1, 'phamthushame2002@gmail.com', '123456789', 0),
(2, 'phamphuocbinh@gmail.com', '123456789', 0),
(3, 'lethanhthuy@gmail.com', '123456789', 0),
(4, 'phamhuynhyenvi.dt@gmail.com', '123456789', 0),
(5, 'aaa@gmail.com', '123', 0),
(6, 'angiangstore@gmail.com', '123456789', 0),
(7, 'test@gmail.com', '123456789', 0);

-- --------------------------------------------------------

--
-- Table structure for table `bacsi`
--

CREATE TABLE `bacsi` (
  `id` int(11) NOT NULL,
  `hoten` text NOT NULL,
  `sdt` varchar(10) NOT NULL,
  `email` text NOT NULL,
  `chuyenkhoa` text NOT NULL,
  `matkhau` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bacsi`
--

INSERT INTO `bacsi` (`id`, `hoten`, `sdt`, `email`, `chuyenkhoa`, `matkhau`) VALUES
(1, 'Phạm Huỳnh Anh Thư', '0123456789', 'thuolala2323@gmail.com', 'Nội', '123456789'),
(2, 'Nguyễn Thị Ngọc Tuyết', '0122345678', 'nguyenthingoctuyet1603@gmail.com', 'Ngoại', '123456789'),
(3, 'Trần Nguyệt Minh', '0123345678', 'nguyetminhtran161102@gmail.com', 'Nội', '123456789'),
(4, 'Bác Sĩ D', '0123445678', 'bacsiD@gmail.com', 'Ngoại', '123456789'),
(5, 'Bác Sĩ E', '0123455678', 'bacsiE@gmail.com', 'Nội', '123456789'),
(6, 'Bác Sĩ F', '0123456678', 'bacsiF@gmail.com', 'Ngoại', '123456789'),
(7, 'Bác Sĩ G', '0123456778', 'bacsiG@gmail.com', 'Nội', '12345678'),
(8, 'Bác Sĩ H', '0123456788', 'bacsiH@gmail.com', 'Ngoại', '123456789'),
(9, 'Bác Sĩ I', '0123012301', 'bacsiI@gmail.com', 'Nội', '123456789'),
(10, 'Bác Sĩ J', '0222222222', 'bacsiJ@gmail.com', 'Ngoại', '123456789'),
(11, 'Xù', '0123454321', 'xu@gmail.com', 'Nội', '123456789'),
(12, 'Coca', '0123454322', 'coca@gmail.com', 'Nội', '123456789'),
(13, 'Đô', '0123454323', 'do@gmail.com', 'Ngoại', '123456789'),
(14, 'Jiji', '0123454324', 'jiji@gmail.com', 'Ngoại', '123456789');

-- --------------------------------------------------------

--
-- Table structure for table `benhnhan`
--

CREATE TABLE `benhnhan` (
  `id` bigint(11) NOT NULL,
  `hoten` text NOT NULL,
  `sdt` varchar(10) NOT NULL,
  `email` text NOT NULL,
  `gioitinh` int(11) NOT NULL,
  `namsinh` int(11) NOT NULL,
  `diachi` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `benhnhan`
--

INSERT INTO `benhnhan` (`id`, `hoten`, `sdt`, `email`, `gioitinh`, `namsinh`, `diachi`) VALUES
(1, 'Phạm Huỳnh Anh Thư', '0946020824', 'phamthushame2002@gmail.com', 1, 2002, 'Cao Lãnh'),
(2, 'Phạm Phước Bình', '0912873642', 'phamphuocbinh@gmail.com', 0, 1976, 'Cao Lãnh'),
(3, 'Lê Thanh Thủy', '0942757254', 'lethanhthuy@gmail.com', 1, 1977, 'Cao Lãnh'),
(4, 'Phạm Huỳnh Yến Vi', '0847608473', 'phamhuynhyenvi.dt@gmail.com', 1, 2005, 'Cao Lãnh'),
(5, 'A', '123456', 'aaa@gmail.com', 0, 1999, 'a'),
(6, 'Test', '123456', 'angiangstore@gmail.com', 0, 2002, 'SG'),
(7, 'Test A', '0123457894', 'test@gmail.com', 0, 2002, 'Sài Gòn');

-- --------------------------------------------------------

--
-- Table structure for table `cakham`
--

CREATE TABLE `cakham` (
  `id` int(11) NOT NULL,
  `loaicakham` text NOT NULL,
  `chuyenkhoa` text NOT NULL,
  `id_bacsi` int(11) NOT NULL,
  `bacsi` text NOT NULL,
  `chiphi` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cakham`
--

INSERT INTO `cakham` (`id`, `loaicakham`, `chuyenkhoa`, `id_bacsi`, `bacsi`, `chiphi`) VALUES
(1, 'Kiểm tra sức khỏe định kỳ', 'Ngoại', 2, 'Nguyễn Thị Ngọc Tuyết', '1000000'),
(2, 'Tổng quát', 'Ngoại', 4, 'Bác Sĩ D', '1000000'),
(3, 'Chuyên sâu về tim', 'Nội', 1, 'Phạm Huỳnh Anh Thư', '1000000'),
(4, 'Chuyên sâu về thận', 'Nội', 3, 'Trần Nguyệt Minh', '1000000'),
(5, 'Chuyên sâu về gan', 'Nội', 5, 'Bác Sĩ E', '1000000'),
(7, 'Da liễu', 'Ngoại', 8, 'Bác Sĩ H', '1000000'),
(8, 'Tổng quát', 'Nội', 9, 'Bác Sĩ I', '1000000'),
(10, 'Chuyên sâu về tim', 'Nội', 7, 'Bác Sĩ G', '1000000'),
(11, 'Chuyên sâu về thận', 'Nội', 1, 'Phạm Huỳnh Anh Thư', '1000000'),
(12, 'Chuyên sâu về gan', 'Nội', 7, 'Bác Sĩ G', '1000000'),
(16, 'Chuyên sâu về gan', 'Nội', 1, 'Phạm Huỳnh Anh Thư', '1000000'),
(18, 'Tổng quát', 'Nội', 12, 'Coca', '1000000'),
(19, 'Da liễu', 'Ngoại', 13, 'Đô', '1000000'),
(20, 'Chuyên sâu về thận', 'Nội', 11, 'Xù', '1000000');

-- --------------------------------------------------------

--
-- Table structure for table `chuyenkhoa`
--

CREATE TABLE `chuyenkhoa` (
  `id` int(11) NOT NULL,
  `ten` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `chuyenkhoa`
--

INSERT INTO `chuyenkhoa` (`id`, `ten`) VALUES
(1, 'Nội'),
(2, 'Ngoại');

-- --------------------------------------------------------

--
-- Table structure for table `doanhthu`
--

CREATE TABLE `doanhthu` (
  `id` int(11) NOT NULL,
  `ngay` text NOT NULL,
  `id_hsck` int(11) NOT NULL,
  `tongtien` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `hoso_cakham`
--

CREATE TABLE `hoso_cakham` (
  `id` bigint(11) NOT NULL,
  `loaicakham` text NOT NULL,
  `bacsi` text NOT NULL,
  `id_bacsi` int(11) NOT NULL,
  `id_cakham` int(11) NOT NULL,
  `id_benhnhan` bigint(11) NOT NULL,
  `benhnhan` text NOT NULL,
  `sdt` varchar(10) NOT NULL,
  `email` text NOT NULL,
  `namsinh` int(11) NOT NULL,
  `lichsu_benhly` text DEFAULT NULL,
  `chuandoan` text DEFAULT NULL,
  `dieutri` text DEFAULT NULL,
  `ngaykham` text NOT NULL,
  `giokham` text NOT NULL,
  `trangthai` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hoso_cakham`
--

INSERT INTO `hoso_cakham` (`id`, `loaicakham`, `bacsi`, `id_bacsi`, `id_cakham`, `id_benhnhan`, `benhnhan`, `sdt`, `email`, `namsinh`, `lichsu_benhly`, `chuandoan`, `dieutri`, `ngaykham`, `giokham`, `trangthai`) VALUES
(5, 'Chuyên sâu về tim', 'Phạm Huỳnh Anh Thư', 1, 3, 1, 'Phạm Huỳnh Anh Thư', '0946020824', 'phamthushame2002@gmail.com', 2002, NULL, '', '', '2024-03-18', '07:00', 1),
(6, 'Chuyên sâu về gan', 'Phạm Huỳnh Anh Thư', 1, 16, 1, 'Phạm Huỳnh Anh Thư', '0946020824', 'phamthushame2002@gmail.com', 2002, NULL, '', '', '2024-03-19', '08:00', 1),
(7, 'Kiểm tra sức khỏe định kỳ', 'Nguyễn Thị Ngọc Tuyết', 2, 1, 1, 'Phạm Huỳnh Anh Thư', '0946020824', 'phamthushame2002@gmail.com', 2002, NULL, '', '', '2024-03-19', '11:00', 0),
(8, 'Kiểm tra sức khỏe định kỳ', 'Nguyễn Thị Ngọc Tuyết', 2, 1, 4, 'Phạm Huỳnh Yến Vi', '0847608473', 'phamhuynhyenvi.dt@gmail.com', 2005, NULL, '', '', '2024-03-20', '17:30', 0),
(9, 'Chuyên sâu về tim', 'Phạm Huỳnh Anh Thư', 1, 3, 1, 'Phạm Huỳnh Anh Thư', '0946020824', 'phamthushame2002@gmail.com', 2002, NULL, '', '', '2024-03-21', '18:50', 1),
(10, 'Chuyên sâu về thận', 'Trần Nguyệt Minh', 3, 4, 1, 'Phạm Huỳnh Anh Thư', '0946020824', 'phamthushame2002@gmail.com', 2002, NULL, '', '', '2024-03-18', '10:10', 0),
(11, 'Chuyên sâu về tim', 'Phạm Huỳnh Anh Thư', 1, 3, 4, 'Phạm Huỳnh Yến Vi', '0847608473', 'phamhuynhyenvi.dt@gmail.com', 2005, NULL, '', '', '2024-03-19', '12:40', 1),
(12, 'Chuyên sâu về tim', 'Phạm Huỳnh Anh Thư', 1, 3, 1, 'Phạm Huỳnh Anh Thư', '0946020824', 'phamthushame2002@gmail.com', 2002, NULL, '', '', '2024-03-20', '03:00', 0),
(13, 'Chuyên sâu về tim', 'Phạm Huỳnh Anh Thư', 1, 3, 1, 'Phạm Huỳnh Anh Thư', '0946020824', 'phamthushame2002@gmail.com', 2002, NULL, '', '', '2024-03-20', '10:25', 0),
(14, 'Chuyên sâu về tim', 'Phạm Huỳnh Anh Thư', 1, 3, 1, 'Phạm Huỳnh Anh Thư', '0946020824', 'phamthushame2002@gmail.com', 2002, NULL, '', '', '2024-03-20', '', 0),
(15, 'Chuyên sâu về tim', 'Phạm Huỳnh Anh Thư', 1, 3, 1, 'Phạm Anh', '0946020824', 'phamthushame2002@gmail.com', 2002, NULL, '', '', '2024-03-20', '10:00', 0),
(16, 'Chuyên sâu về tim', 'Phạm Huỳnh Anh Thư', 1, 3, 1, 'Phạm Huỳnh Anh Thư', '0946020824', 'phamthushame2002@gmail.com', 2002, NULL, '', '', '2024-03-20', '06:18', 0),
(17, 'Chuyên sâu về tim', 'Phạm Huỳnh Anh Thư', 1, 3, 1, 'Phạm ', '0946020824', 'phamthushame2002@gmail.com', 2002, NULL, '', '', '2024-03-20', '08:25', 0),
(18, 'Chuyên sâu về tim', 'Phạm Huỳnh Anh Thư', 1, 3, 1, ' Thư', '0946020824', 'phamthushame2002@gmail.com', 2002, NULL, '', '', '2024-03-20', '05:23', 1),
(19, 'Chuyên sâu về tim', 'Phạm Huỳnh Anh Thư', 1, 3, 1, 'Phạm Huỳnh Anh Thư', '0946020824', 'phamthushame2002@gmail.com', 2002, NULL, '', '', '2024-03-20', '04:45', 1),
(20, 'Chuyên sâu về tim', 'Phạm Huỳnh Anh Thư', 1, 3, 1, 'Phạm Huỳnh Anh Thư', '0946020824', 'phamthushame2002@gmail.com', 2002, NULL, '', '', '2024-03-20', '10:50', 1),
(21, 'Chuyên sâu về tim', 'Phạm Huỳnh Anh Thư', 1, 3, 1, 'Phạm Huỳnh Anh Thư', '0946020824', 'phamthushame2002@gmail.com', 2002, NULL, '', '', '2024-03-21', '06:30', 0),
(22, 'Chuyên sâu về tim', 'Phạm Huỳnh Anh Thư', 1, 3, 1, 'Phạm Huỳnh Anh Thư', '0946020824', 'phamthushame2002@gmail.com', 2002, NULL, '', '', '2024-03-21', '06:45', 0);

-- --------------------------------------------------------

--
-- Table structure for table `hoso_trangthai`
--

CREATE TABLE `hoso_trangthai` (
  `id` int(11) NOT NULL,
  `id_hoso` int(11) NOT NULL,
  `trangthai` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `loaicakham`
--

CREATE TABLE `loaicakham` (
  `id` int(11) NOT NULL,
  `ten` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `loaicakham`
--

INSERT INTO `loaicakham` (`id`, `ten`) VALUES
(1, 'Kiểm tra sức khỏe định kỳ'),
(2, 'Tổng quát'),
(3, 'Chuyên sâu về tim'),
(4, 'Da liễu'),
(5, 'Chuyên sâu về thận'),
(6, 'Chuyên sâu về gan');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `phone`, `password`) VALUES
(1, '0946020824', '123456'),
(2, '0912873642', '123456'),
(3, '0942757254', '111111'),
(4, '0847608473', '2222222'),
(5, '0123456789', '123456'),
(29, '1144444', '123456');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sdt` (`email`) USING HASH;

--
-- Indexes for table `bacsi`
--
ALTER TABLE `bacsi`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `benhnhan`
--
ALTER TABLE `benhnhan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cakham`
--
ALTER TABLE `cakham`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_idbacsi` (`id_bacsi`);

--
-- Indexes for table `chuyenkhoa`
--
ALTER TABLE `chuyenkhoa`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doanhthu`
--
ALTER TABLE `doanhthu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hoso_cakham`
--
ALTER TABLE `hoso_cakham`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_idbs` (`id_bacsi`),
  ADD KEY `fk_cakham` (`id_cakham`),
  ADD KEY `fk_benhnhan` (`id_benhnhan`);

--
-- Indexes for table `hoso_trangthai`
--
ALTER TABLE `hoso_trangthai`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `loaicakham`
--
ALTER TABLE `loaicakham`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `phone` (`phone`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `bacsi`
--
ALTER TABLE `bacsi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `benhnhan`
--
ALTER TABLE `benhnhan`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `cakham`
--
ALTER TABLE `cakham`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `chuyenkhoa`
--
ALTER TABLE `chuyenkhoa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `doanhthu`
--
ALTER TABLE `doanhthu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `hoso_cakham`
--
ALTER TABLE `hoso_cakham`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `hoso_trangthai`
--
ALTER TABLE `hoso_trangthai`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `loaicakham`
--
ALTER TABLE `loaicakham`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cakham`
--
ALTER TABLE `cakham`
  ADD CONSTRAINT `fk_idbacsi` FOREIGN KEY (`id_bacsi`) REFERENCES `bacsi` (`id`);

--
-- Constraints for table `hoso_cakham`
--
ALTER TABLE `hoso_cakham`
  ADD CONSTRAINT `fk_benhnhan` FOREIGN KEY (`id_benhnhan`) REFERENCES `benhnhan` (`id`),
  ADD CONSTRAINT `fk_cakham` FOREIGN KEY (`id_cakham`) REFERENCES `cakham` (`id`),
  ADD CONSTRAINT `fk_idbs` FOREIGN KEY (`id_bacsi`) REFERENCES `bacsi` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
