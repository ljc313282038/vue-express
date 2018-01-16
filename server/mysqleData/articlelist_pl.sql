-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2018-01-16 10:59:20
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `article`
--

-- --------------------------------------------------------

--
-- 表的结构 `articlelist_pl`
--

CREATE TABLE `articlelist_pl` (
  `id` int(10) UNSIGNED NOT NULL,
  `articlelist_id` int(10) DEFAULT NULL COMMENT 'id',
  `author_pl` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '评论用户',
  `content_pl` text COLLATE utf8_bin COMMENT '品论信息'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- 转存表中的数据 `articlelist_pl`
--

INSERT INTO `articlelist_pl` (`id`, `articlelist_id`, `author_pl`, `content_pl`) VALUES
(2, 1, 'xx', '3455'),
(3, 1, '@张三', '45678亿i'),
(5, 1, '@张三', '123'),
(17, 1, '@张三', '235'),
(22, 1, 'undefined', '额'),
(23, 4, 'undefined', '测试'),
(24, 2, 'undefined', '测试哦');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articlelist_pl`
--
ALTER TABLE `articlelist_pl`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `articlelist_pl`
--
ALTER TABLE `articlelist_pl`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
