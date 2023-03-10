-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 06, 2020 at 05:48 AM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `namsaigon`
--
CREATE DATABASE IF NOT EXISTS `namsaigon` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `namsaigon`;

-- --------------------------------------------------------

--
-- Table structure for table `nganhnghe`
--

DROP TABLE IF EXISTS `nganhnghe`;
CREATE TABLE IF NOT EXISTS `nganhnghe` (
  `ma_nganh` varchar(6) NOT NULL,
  `ten_nganh` varchar(50) NOT NULL,
  `chi_tieu` smallint(6) NOT NULL,
  PRIMARY KEY (`ma_nganh`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nganhnghe`
--

INSERT INTO `nganhnghe` (`ma_nganh`, `ten_nganh`, `chi_tieu`) VALUES
('CNKTPC', 'Công Nghệ Kỹ Thuật Phần Cứng Máy Tính', 30),
('KTDN', 'Kế Toán Doanh Nghiệp', 50),
('QTKD', 'Quản Trị Kinh Doanh', 55),
('QTMMT', 'Quản Trị Mạng Máy Tính', 30),
('THUD', 'Tin học ứng dụng', 60),
('TKDH', 'Thiết kế đồ họa', 90);

-- --------------------------------------------------------

--
-- Table structure for table `phongban`
--

DROP TABLE IF EXISTS `phongban`;
CREATE TABLE IF NOT EXISTS `phongban` (
  `ma_phong_ban` varchar(10) NOT NULL,
  `ten_phong_ban` varchar(40) NOT NULL,
  `chuc_nang` text,
  PRIMARY KEY (`ma_phong_ban`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `phongban`
--

INSERT INTO `phongban` (`ma_phong_ban`, `ten_phong_ban`, `chuc_nang`) VALUES
('CTCT-HSSV', 'Phòng Công Tác Chính Trị - HSSV', 'Tham mưu và giúp Hiệu trưởng trong việc quản lý, tổng hợp, đề xuất ý kiến, tổ chức thực hiện công tác giáo dục chính trị, tư tưởng HSSV; tổ chức thực hiện các nôi dung công tác HSSV theo quy định'),
('DTKT', 'Phòng Đào tạo - Khảo thí', 'Tham mưu và giúp Hiệu trưởng trong việc quản lý, tổng hợp, đề xuất ý kiến, tổ chức thực hiện công tác hoạch định chiến lược phát triển đào tạo của nhà trường. Tổ chức chỉ đạo thực hiện, kiểm tra và giám sát toàn bộ công tác giảng dạy và học tập các hệ đào tạo của trường.'),
('KHTC', 'Phòng Kế hoạch Tài chính', 'Tham mưu và giúp Hiệu trưởng trong việc quản lý, tổng hợp, đề xuất ý kiến, tổ chức thực hiện công tác Kế hoạch và tài chính, quản lý và sử dụng hiệu quả nguồn tài chính phục vụ cho các hoạt động của Nhà trường theo chế độ quy định của Nhà nước.'),
('TCHC', 'Phòng Tổ chức - Hành chính', 'Tham mưu và giúp Hiệu trưởng thực hiện công tác tổ chức, cán bộ; bảo vệ chính trị nội bộ; công tác hành chính - tổng hợp, văn thư - lưu trữ; công tác thi đua; khen thưởng; kỷ luật; công tác pháp chế theo quy định hiện hành'),
('TS', 'Phòng Tuyển Sinh', 'Tham mưu và giúp Hiệu trưởng trong việc quản lý, tổng hợp, đề xuất ý kiến, tổ chức thực hiện công tác tư vấn, tuyển sinh, quảng bá các hoạt động đào tạo của Nhà trường.');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
