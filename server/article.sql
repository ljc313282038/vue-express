-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2018-01-12 11:49:03
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
-- 表的结构 `articlelist`
--

CREATE TABLE `articlelist` (
  `id` int(10) UNSIGNED NOT NULL COMMENT 'id',
  `titile` char(45) DEFAULT NULL COMMENT '标题',
  `author` varchar(255) DEFAULT NULL COMMENT '作者',
  `time` date DEFAULT NULL COMMENT '时间',
  `content` text COMMENT '文章内容',
  `like` int(11) UNSIGNED NOT NULL DEFAULT '0' COMMENT '点赞',
  `read` int(255) UNSIGNED NOT NULL DEFAULT '0',
  `type` char(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `articlelist`
--

INSERT INTO `articlelist` (`id`, `titile`, `author`, `time`, `content`, `like`, `read`, `type`) VALUES
(1, '1tj最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！', 'jc', '2018-01-10', '最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！\r\n最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的\r\n容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有\r\n最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！哪些？腾讯、\r\n最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！华为、思科等\r\n6 位顶尖专家为你解答！', 30, 30, 'tj'),
(2, '2tj最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！', 'jc', '2018-01-10', '最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！\r\n最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的\r\n容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有\r\n最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！哪些？腾讯、\r\n最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！华为、思科等\r\n6 位顶尖专家为你解答！', 0, 0, 'tj'),
(3, '3tj最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！', 'jc', '2018-01-10', '最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！\r\n最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的\r\n容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有\r\n最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！哪些？腾讯、\r\n最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！华为、思科等\r\n6 位顶尖专家为你解答！', 0, 0, 'tj'),
(4, '4tj最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！', 'jc', '2018-01-10', '最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！\r\n最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的\r\n容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有\r\n最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！哪些？腾讯、\r\n最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！华为、思科等\r\n6 位顶尖专家为你解答！', 12, 12, 'tj'),
(7, '7tj最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！', 'jc', '2018-01-10', '最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！\r\n最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的\r\n容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有\r\n最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！哪些？腾讯、\r\n最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！最前沿的容器技术有哪些？腾讯、华为、思科等 6 位顶尖专家为你解答！华为、思科等\r\n6 位顶尖专家为你解答！', 0, 0, 'htmlcss');

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
-- Indexes for table `articlelist`
--
ALTER TABLE `articlelist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `articlelist_pl`
--
ALTER TABLE `articlelist_pl`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `articlelist`
--
ALTER TABLE `articlelist`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'id', AUTO_INCREMENT=8;
--
-- 使用表AUTO_INCREMENT `articlelist_pl`
--
ALTER TABLE `articlelist_pl`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
