<?php
require_once $PATH . '/models/general.php';


$uri = $_SERVER['REQUEST_URI'];

if ($_SERVER['REQUEST_METHOD'] === 'POST'){

}

if ($_SERVER['REQUEST_METHOD'] === 'GET'){
  switch ($uri){
    case '/':
      renderPage($PATH . '/templates/mainPage.php');
      break;
    default: print 'Sorry, but this URL is invalid. 404'; // todo add 404 page
  }
}