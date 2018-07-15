<?php
require_once $PATH . '/models/general.php';


$uri = $_SERVER['REQUEST_URI'];

if ($_SERVER['REQUEST_METHOD'] === 'POST'){

}

if ($_SERVER['REQUEST_METHOD'] === 'GET'){
  switch ($uri){
    case 'login':
      print 'login page';
      break;
    default:
      renderPage($PATH . '/templates/mainPage.php');
  }
}