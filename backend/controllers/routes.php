<?php
require_once $PATH_B . '/models/general.php';

$uri = $_SERVER['REQUEST_URI'];

if ($_SERVER['REQUEST_METHOD'] === 'GET'){
  switch ($uri){
    case '/login':
      print 'login page';
      break;
    case '/':
      renderPage($PATH_B . '/templates/mainPage.php');
      break;
//    case '/article':
//      renderPage($PATH_B . '/templates/mainPage.php');
//      break;
    default:
      if($uri !== '/article/app/main.js'){
        renderPage($PATH_B . '/templates/mainPage.php');
      }
  }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST'){

  switch ($uri){
    case '/article-get-list':
      echo json_encode(getArticlesList());
      exit;
  }
}