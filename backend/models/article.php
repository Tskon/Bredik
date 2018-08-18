<?php
function getArticlesList(){
  $filelist = scandir($GLOBALS['PATH_F'] . '/content/articles');
  return array_slice($filelist, 2);
}


