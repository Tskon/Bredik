<?php
require_once $PATH_B . '/models/general.php';

$uri = $_SERVER['REQUEST_URI'];

if ($_SERVER['REQUEST_METHOD'] === 'POST'){
    switch ($uri){
        case 'artticle-get-list':
            echo json_encode($articles);
            exit;
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'GET'){
  switch ($uri){
    case 'login':
      print 'login page';
      break;
    default:
      renderPage($PATH_B . '/templates/mainPage.php');
  }
}