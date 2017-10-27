FROM php:7.0-apache

RUN apt-get update && apt-get install -y ssl-cert \
  --no-install-recommends && rm -r /var/lib/apt/lists/*

ADD php.ini /usr/local/etc/php/

RUN docker-php-ext-install pdo_mysql mysqli
