<?php 
$mainPage = false;
if(strpos($_SERVER['REQUEST_URI'], '/index.php') || preg_match('/loccitane\/mobile\/$/', $_SERVER['REQUEST_URI'])){
	$mainPage = true;
}
$pathArr = explode('/', $_SERVER['REQUEST_URI']);
$root = '../';
$currentPage = end($pathArr);
$womans = [
  'eg' => [
    'name' => 'Екатерина Гусева',
    'url' => 'guseva.php',
    'img' => 'build/img/girls/guseva.png',
    'active' => false
  ],
  'os' => [
    'name' => 'Олеся Судзиловская',
    'url' => 'sudzilovskaya.php',
    'img' => 'build/img/girls/sudzilovskaya.png',
    'active' => false
  ],
  'rk' => [
    'name' => 'Равшана Куркова',
    'url' => 'kurkova.php',
    'img' => 'build/img/girls/kurkova.png',
    'active' => true
  ],
  'tl' => [
    'name' => 'Татьяна Лютаева',
    'url' => 'liutaeva.php',
    'img' => 'build/img/girls/liutaeva.png',
    'active' => true
  ],
  'ep' => [
    'name' => 'Елена Подкаминская',
    'url' => 'podkaminskaya.php',
    'img' => 'build/img/girls/podkaminskaya.png',
    'active' => true
  ]
];
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=640">
  <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700&amp;subset=cyrillic" rel="stylesheet">
  <link href="<?=$root;?>build/css/main.css" rel="stylesheet">
  <script src="<?=$root;?>build/js/vendor/jquery-3.1.1.slim.min.js"></script>
  <script src="<?=$root;?>build/img/svg/sprite.js"></script>
  <title>Loccitane</title>
</head>
<body>
<div class="svg-placeholder hidden"></div>
<script>$('.svg-placeholder').html(SVG_SPRITE);</script>
<div class="layout <?php if($mainPage){?>layout--mhome<?php } else {?>layout--landing<?php } ?>">
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
      <a href="http://psychologies.ru/" class="logo__link" target="_blank">
        <svg class="logo logo--psychologies"><use xlink:href="#psychologies"/></svg>
      </a>
	  </div>
	</div>
</div>