<?php require('parts/header.php');?>
<div class="page">
  <div class="container">
    <div class="page__heading tp-heading--huge tp-text--center">Выбор женщины</div>
    <div class="page__heading-text tp-body--main tp-text--center">
      <p>Умение относиться к себе с любовью и уважением, забота о своем теле – это&nbsp;важные слагаемые красоты. Как сохранить свою женственность на долгие годы? Пять очаровательных женщин делятся своими секретами</p>
    </div>
    <div class="owl-carousel carousel--girls">
      <?php foreach ($womans as $woman) { ?>
        <div class="carousel__item girl<?php if (!$woman['active']) { ?> disabled<?php } ?>">
          <div class="girl__name">
            <div class="girl__first-name"><?=explode(' ', $woman['name'])[0];?></div>
            <div class="girl__last-name"><?=explode(' ', $woman['name'])[1];?></div>
          </div>
          <div class="girl__photo"><img src="<?=$woman['img'];?>"/></div>
          <a href="<?=$woman['url'];?>" class="girl__link btn">Читать</a>
        </div>
      <?php } ?>
    </div>
    <?php include('parts/social-inline.php'); ?>
  </div>
</div> <!-- /.page -->
<?php require('parts/footer.php'); ?>