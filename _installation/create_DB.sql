CREATE DATABASE IF NOT EXISTS `flashCard`;

CREATE TABLE IF NOT EXISTS `flashCard`.`cards` (
  `card_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'auto incrementing card_id of each card, unique index',
  `str_1` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT 'recto card',
  `str_2` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT 'verso card',
  PRIMARY KEY (`card_id`),
  UNIQUE KEY `str_1` (`str_1`),
  UNIQUE KEY `str_2` (`str_2`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='card data'

CREATE TABLE IF NOT EXISTS `flashCard`.`users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'auto incrementing card_id of each card, unique index',
  `card_actual_id` int(11) NOT NULL COMMENT 'id card actual',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `card_actual_id` (`card_actual_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='user data'

INSERT INTO `cards`(`str_1`,`str_2`) values ('guillaume','maurin');
INSERT INTO `users`(`card_actual_id`) values ('1');
