-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 16, 2021 at 05:40 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `demo_admin`
--

-- --------------------------------------------------------

--
-- Table structure for table `adonis_schema`
--

CREATE TABLE `adonis_schema` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `adonis_schema`
--

INSERT INTO `adonis_schema` (`id`, `name`, `batch`, `migration_time`) VALUES
(1, '1619686678904_users_schema', 1, '2021-04-29 08:59:02');

-- --------------------------------------------------------

--
-- Table structure for table `blog_comments`
--

CREATE TABLE `blog_comments` (
  `id` bigint(20) NOT NULL,
  `blog_post_id` bigint(20) NOT NULL,
  `comment` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blog_comments`
--

INSERT INTO `blog_comments` (`id`, `blog_post_id`, `comment`, `user_id`, `created_at`, `updated_at`) VALUES
(24, 20, 'this is new comment.', 15, '2021-05-29 20:35:55', '2021-05-30 11:13:44'),
(25, 21, 'this is comment. okay?', 15, '2021-05-30 16:37:15', '2021-05-30 16:37:34'),
(26, 21, 'mnmn n', 15, '2021-05-30 16:37:40', '2021-05-30 16:37:40'),
(27, 19, 'hdbcb', 15, '2021-05-30 17:46:20', '2021-05-30 17:46:20'),
(28, 20, 'this is commented on 6/1/2021, 10:34AM', 15, '2021-06-01 10:34:56', '2021-06-01 10:34:56'),
(29, 20, 'helo', 15, '2021-06-01 10:40:11', '2021-06-01 10:40:11'),
(30, 20, 'replu', 15, '2021-06-01 11:07:19', '2021-06-01 11:07:19'),
(31, 20, 'kkk', 15, '2021-06-01 11:08:52', '2021-06-01 11:08:52'),
(32, 20, 'hello', 15, '2021-06-01 11:09:31', '2021-06-01 11:09:31'),
(33, 20, 'last comment on 11.11', 15, '2021-06-01 11:11:36', '2021-06-01 11:11:36');

-- --------------------------------------------------------

--
-- Table structure for table `blog_comment_replies`
--

CREATE TABLE `blog_comment_replies` (
  `id` bigint(20) NOT NULL,
  `blog_post_id` bigint(20) NOT NULL,
  `blog_comment_id` bigint(20) NOT NULL,
  `reply_text` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blog_comment_replies`
--

INSERT INTO `blog_comment_replies` (`id`, `blog_post_id`, `blog_comment_id`, `reply_text`, `user_id`, `created_at`, `updated_at`) VALUES
(16, 19, 27, 'jashxjs', 15, '2021-05-30 17:46:27', '2021-05-30 17:46:27'),
(17, 20, 28, 'reply mm', 15, '2021-06-01 10:37:03', '2021-06-01 11:17:53'),
(18, 20, 28, 'new one', 15, '2021-06-01 10:39:44', '2021-06-01 10:39:44'),
(19, 20, 29, '11.3', 15, '2021-06-01 11:03:34', '2021-06-01 11:03:34'),
(20, 20, 29, 'now', 15, '2021-06-01 11:06:09', '2021-06-01 11:06:09');

-- --------------------------------------------------------

--
-- Table structure for table `blog_images`
--

CREATE TABLE `blog_images` (
  `id` bigint(20) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `blog_post_id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `blog_likes`
--

CREATE TABLE `blog_likes` (
  `id` bigint(20) NOT NULL,
  `blog_post_id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `blog_posts`
--

CREATE TABLE `blog_posts` (
  `id` bigint(20) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text NOT NULL,
  `data` text DEFAULT NULL,
  `cover_pic` varchar(255) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `views` bigint(20) DEFAULT 0,
  `activity_type` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blog_posts`
--

INSERT INTO `blog_posts` (`id`, `title`, `description`, `data`, `cover_pic`, `user_id`, `views`, `activity_type`, `created_at`, `updated_at`) VALUES
(19, 'hello', '<blockquote><strong>this is not okay </strong></blockquote><blockquote><strong>now okay</strong></blockquote>', NULL, 'http://localhost:3333/uploads/image_1622119124111.jpg', 14, 11, 'Blog', '2021-05-27 18:41:16', '2021-05-27 18:41:16'),
(20, 'this is course titile', '<p>,mxc ,mx  ,kdfnkd</p>', '[{\"source\":\"http://localhost:3333/uploads/image_1622298618945.mp4\",\"hours\":\"\",\"title\":\"m,m,\",\"extType\":\"mp4\"}]', 'http://localhost:3333/uploads/image_1622298594321.jpg', 15, 137, 'Course', '2021-05-29 20:30:41', '2021-05-29 20:30:41'),
(21, 'this is course titile', '<p>,mxc ,mx  ,kdfnkd</p>', '[{\"source\":\"http://localhost:3333/uploads/image_1622298618945.mp4\",\"hours\":\"\",\"title\":\"m,m,\",\"extType\":\"mp4\"},{\"source\":\"http://localhost:3333/uploads/image_1621938013885.mp4\",\"hours\":\"\",\"title\":\"m,m,\",\"extType\":\"mp4\"}]', 'http://localhost:3333/uploads/image_1622298594321.jpg', 15, 38, 'Course', '2021-05-29 20:30:41', '2021-05-29 20:30:41');

-- --------------------------------------------------------

--
-- Table structure for table `comment_likes`
--

CREATE TABLE `comment_likes` (
  `id` bigint(20) NOT NULL,
  `blog_post_id` bigint(20) NOT NULL,
  `blog_comment_id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comment_likes`
--

INSERT INTO `comment_likes` (`id`, `blog_post_id`, `blog_comment_id`, `user_id`, `created_at`, `updated_at`) VALUES
(40, 21, 25, 15, '2021-05-30 16:37:26', '2021-05-30 16:37:26'),
(41, 20, 24, 15, '2021-06-01 10:33:29', '2021-06-01 10:33:29'),
(43, 20, 28, 15, '2021-06-01 11:36:36', '2021-06-01 11:36:36');

-- --------------------------------------------------------

--
-- Table structure for table `comment_reply_likes`
--

CREATE TABLE `comment_reply_likes` (
  `id` bigint(20) NOT NULL,
  `blog_comment_id` bigint(20) NOT NULL,
  `blog_comment_reply_id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `question` text NOT NULL,
  `answer` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `question`, `answer`, `created_at`, `updated_at`, `user_id`) VALUES
(1, 'this is question??', 'and this is answer. and this is answer. and this is answer. and this is answer. and this is answer. and this is answer. and this is answer. and this is answer. and this is answer. and this is answer. and this is answer. and this is answer. and this is answer. and this is answer. and this is answer. and this is answer. and this is answer. and this is answer. and this is answer. and this is answer. and this is answer. and this is answer. and this is answer. and this is answer. ', '2021-05-31 10:31:51', '2021-05-31 10:31:51', 15),
(6, 'this is 2nd question', '', '2021-05-31 16:07:53', '2021-05-31 16:07:53', 15),
(7, '3rd ine?\n', '', '2021-05-31 16:16:20', '2021-05-31 16:16:20', 15),
(9, 'sednkjwdwkjebkwj eekwkj', 'SAIKAT 84, ARPIN NAGOR, SUNAMGANJ', '2021-06-02 16:59:04', '2021-06-02 17:07:46', 15);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact` int(25) DEFAULT NULL,
  `profile_picture` varchar(255) DEFAULT NULL,
  `dark_mode` tinyint(1) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) DEFAULT 0,
  `userType` varchar(255) NOT NULL DEFAULT 'User',
  `password` varchar(255) NOT NULL,
  `status` varchar(255) DEFAULT 'active',
  `verify_code` varchar(255) DEFAULT NULL,
  `token` varchar(25) DEFAULT NULL,
  `token_created_at` datetime DEFAULT NULL,
  `forgot_code` varchar(255) DEFAULT NULL,
  `gender` varchar(255) NOT NULL,
  `is_agree` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `username`, `email`, `contact`, `profile_picture`, `dark_mode`, `is_active`, `userType`, `password`, `status`, `verify_code`, `token`, `token_created_at`, `forgot_code`, `gender`, `is_agree`, `created_at`, `updated_at`) VALUES
(14, 'nasuha', 'akhter', 'nasuha_akhter', 'nasuhaakhter52@gmail.com', NULL, 'https://app.homewardbase.com/uploads/Mv5rlO9qRVqs9ReUnGJg68oi6yQFmqcHetWHrMjf.jpg', 0, 1, 'Admin', '$2a$10$KoOvsz32LCymoq6o50RYHu0amcLsIghGO4trWXPZLqccNDxVtrgD.', 'active', NULL, '645321', '2021-06-01 20:14:52', NULL, '', 1, '2021-05-05 14:34:00', '2021-06-01 20:14:52'),
(15, 'someone', ',s ac,.', 'sm, c', 'admin@gmail.com', 0, 'http://localhost:3333/uploads/image_1622616195307.jpg', 0, 1, 'Admin', '$2y$10$BxXEL9k.xv6/032RmQnvqekBRhVTnmTmws1CGfD6.XZgQYbe.qAaq', 'active', NULL, NULL, NULL, NULL, 'Other', 0, '2021-05-26 20:31:09', '2021-06-02 15:44:36'),
(16, 'Hello', 'You', ', nc,_s,m ', 'ms@gmail.com', 0, 'http://localhost:3333/uploads/image_1622274107336.png', 1, 1, 'User', '$2a$10$E51ZXpZd0rrCbyFDZWU/Hei5j1ZnffjwJGwoXUMduzdrf6OgsXyEW', 'active', NULL, NULL, NULL, NULL, 'Female', 0, '2021-05-29 13:36:52', '2021-06-02 12:24:27'),
(17, 'new one', 'dshbj', 'new one_dshbj', 'nnnn@gmail.com', NULL, NULL, 0, 0, 'User', '$2a$10$0.Z9UzV3370hhFoa0IBO7Oz38KxofyBNobn/NK2ct5c3MYwcLS.zi', 'active', NULL, '226571', '2021-05-31 20:58:42', NULL, '', 1, '2021-05-31 20:58:42', '2021-05-31 20:58:42'),
(18, 'new one', 'dshbj', 'new one_dshbj_2', 'juhanasuha52@gmail.com', NULL, NULL, 0, 0, 'User', '$2a$10$wLRDWX2rMI08V1uaifV6VuRm9OogUwL4YyS8yqKdnBoRSa6u9om0W', 'active', NULL, '848346', '2021-06-02 10:26:19', NULL, '', 1, '2021-05-31 21:04:07', '2021-06-02 10:26:19'),
(20, 'nnn', ' mn', 'nnn_ mn', 'naima@gmail.com', NULL, NULL, 0, 0, 'User', '$2a$10$wjZsHGNcWrVoI4p4u14Geu7QZZ7hkLC3u9x1zfFHwodbsBa5YVK1i', 'active', NULL, '872369', '2021-05-31 21:08:00', NULL, '', 1, '2021-05-31 21:08:00', '2021-05-31 21:08:00'),
(21, 'nijam', 'haque', 'nijam_haque', 'nijam@gmail.com', NULL, NULL, 0, 0, 'User', '$2a$10$Tgxa/k1/I5beDueZYxVb6eukh9uir9sbqAqrs0U4wvd9iFBpg51M6', 'active', NULL, '871714', '2021-05-31 21:09:33', NULL, '', 1, '2021-05-31 21:09:33', '2021-05-31 21:09:33'),
(22, 'nasuha', 'akhter', 'nasuha_akhter_2', 'nasuha@gmail.com', NULL, NULL, 0, 0, 'User', '$2a$10$NN8cvhdnN677C6Z8o5mtx.y2cC43.KNyxhixsaeknNRd4MoRe.rnq', 'active', NULL, '557075', '2021-05-31 21:13:09', NULL, '', 1, '2021-05-31 21:13:10', '2021-05-31 21:13:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adonis_schema`
--
ALTER TABLE `adonis_schema`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blog_comments`
--
ALTER TABLE `blog_comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blog_post_id` (`blog_post_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `blog_comment_replies`
--
ALTER TABLE `blog_comment_replies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blog_post_id` (`blog_post_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `blog_comment_id` (`blog_comment_id`);

--
-- Indexes for table `blog_images`
--
ALTER TABLE `blog_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blog_post_id` (`blog_post_id`);

--
-- Indexes for table `blog_likes`
--
ALTER TABLE `blog_likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `blog_post_id` (`blog_post_id`);

--
-- Indexes for table `blog_posts`
--
ALTER TABLE `blog_posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `comment_likes`
--
ALTER TABLE `comment_likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blog_post_id` (`blog_post_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `blog_comment_id` (`blog_comment_id`);

--
-- Indexes for table `comment_reply_likes`
--
ALTER TABLE `comment_reply_likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blog_comment_reply_id` (`blog_comment_reply_id`),
  ADD KEY `blog_comment_id` (`blog_comment_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_user_name_unique` (`username`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adonis_schema`
--
ALTER TABLE `adonis_schema`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `blog_comments`
--
ALTER TABLE `blog_comments`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `blog_comment_replies`
--
ALTER TABLE `blog_comment_replies`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `blog_images`
--
ALTER TABLE `blog_images`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blog_likes`
--
ALTER TABLE `blog_likes`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blog_posts`
--
ALTER TABLE `blog_posts`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `comment_likes`
--
ALTER TABLE `comment_likes`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `comment_reply_likes`
--
ALTER TABLE `comment_reply_likes`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `blog_comments`
--
ALTER TABLE `blog_comments`
  ADD CONSTRAINT `blog_comments_ibfk_1` FOREIGN KEY (`blog_post_id`) REFERENCES `blog_posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `blog_comments_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `blog_comment_replies`
--
ALTER TABLE `blog_comment_replies`
  ADD CONSTRAINT `blog_comment_replies_ibfk_2` FOREIGN KEY (`blog_post_id`) REFERENCES `blog_posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `blog_comment_replies_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `blog_comment_replies_ibfk_4` FOREIGN KEY (`blog_comment_id`) REFERENCES `blog_comments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `blog_images`
--
ALTER TABLE `blog_images`
  ADD CONSTRAINT `blog_images_ibfk_1` FOREIGN KEY (`blog_post_id`) REFERENCES `blog_posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `blog_likes`
--
ALTER TABLE `blog_likes`
  ADD CONSTRAINT `blog_likes_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `blog_likes_ibfk_3` FOREIGN KEY (`blog_post_id`) REFERENCES `blog_posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `blog_posts`
--
ALTER TABLE `blog_posts`
  ADD CONSTRAINT `blog_posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `comment_likes`
--
ALTER TABLE `comment_likes`
  ADD CONSTRAINT `comment_likes_ibfk_1` FOREIGN KEY (`blog_post_id`) REFERENCES `blog_posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comment_likes_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comment_likes_ibfk_4` FOREIGN KEY (`blog_comment_id`) REFERENCES `blog_comments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `comment_reply_likes`
--
ALTER TABLE `comment_reply_likes`
  ADD CONSTRAINT `comment_reply_likes_ibfk_2` FOREIGN KEY (`blog_comment_reply_id`) REFERENCES `blog_comment_replies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comment_reply_likes_ibfk_4` FOREIGN KEY (`blog_comment_id`) REFERENCES `blog_comments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comment_reply_likes_ibfk_5` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
