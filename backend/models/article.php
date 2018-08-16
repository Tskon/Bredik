<?php
global $articles;

$filelist = scandir($PATH_F . '/content/articles');
$articles = array_slice($filelist, 2);

print_r($articles);