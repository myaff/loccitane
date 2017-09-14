<?php 
$mainPage = false;
if(strpos($_SERVER['REQUEST_URI'], '/index.php') || preg_match('/loccitane\/$/', $_SERVER['REQUEST_URI'])){
	$mainPage = true;
}
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css?family=Playfair+Display&amp;subset=cyrillic" rel="stylesheet">
  <link href="./build/css/main.css" rel="stylesheet">
  <script src="./build/js/vendor/jquery-3.1.1.slim.min.js"></script>
  <script src="./build/img/svg/sprite.js"></script>
  <title>Loccitane</title>
</head>
<body>
<div class="svg-placeholder hidden"></div>
<script>$('.svg-placeholder').html(SVG_SPRITE);</script>
<div class="layout <?php if($mainPage){?>layout--home<?php } else {?>layout--landing<?php } ?>">
<div class="header">
	<div class="header__content">
	  <div class="btn-menu__wrapper">
	    <button class="btn-menu js-modal" data-target="#main-menu">
	      <svg class="icon"><use xlink:href="#burger"/></svg>
	    </button>
	  </div>
	  <div class="header__logo logo__wrapper">
      <div class="logo__text">Специальный проект</div>
      <div class="logo__delimiter"></div>
      <a href="#" class="logo__link" target="_blank">
        <svg class="logo logo--psychologies"><use xlink:href="#psychologies"/></svg>
      </a>
	  </div>
	</div>
</div>