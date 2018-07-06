<?php

function renderPage($path) {
  $html = file_get_contents($path);
  print $html;
}