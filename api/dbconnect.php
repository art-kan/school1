<?php

require_once __dir__."/../config.php";

$config = [
    "driver"    => "mysql",
    "host"      => DB_URI,
    "database"  => DB_NAME,
    "username"  => DB_USERNAME,
    "password"  => DB_PASSWORD,
    "charset"   => "utf8mb4",
    "collation" => "utf8_unicode_ci",
    "options"   => [
        PDO::ATTR_TIMEOUT => 5,
        PDO::ATTR_EMULATE_PREPARES => false,
    ],
];

new \Pixie\Connection("mysql", $config, "QB");

?>
