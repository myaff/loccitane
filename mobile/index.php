<?php require('../parts/header-mobile.php');?>
<div class="page page--mhome">
  <div class="container">
    <div class="page__heading tp-heading--huge tp-text--center my-4">Сила красоты</div>
    <div class="page__heading-text tp-body--main tp-text--center">
      <p>Умение относиться к себе с любовью и уважением, забота о своем теле – это&nbsp;важные слагаемые красоты. Как сохранить свою женственность на долгие годы? Пять известных женщин делятся своими секретами</p>
    </div>
    <div class="owl-carousel carousel--girls mt-4">
      <?php foreach ($womans as $key => $woman) { ?>
        <div class="carousel__item girl girl--<?=$key;?><?php if (!$woman['active']) { ?> disabled<?php } ?>">
          <div class="girl__name">
            <div class="girl__first-name"><?=explode(' ', $woman['name'])[0];?></div>
            <div class="girl__last-name"><?=explode(' ', $woman['name'])[1];?></div>
          </div>
          <div class="girl__photo"><img src="<?=$root;?><?=$woman['img'];?>"/></div>
          <a href="<?=$woman['url'];?>" class="girl__link btn">Читать</a>
        </div>
      <?php } ?>
    </div>
    <div class="page__logo"><?php include($root.'parts/logo-loccitane.php'); ?></div>
  </div>
</div> <!-- /.page -->
<?php require($root.'/parts/footer-mobile.php'); ?>