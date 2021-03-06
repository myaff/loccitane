<div class="modal__wrapper invisible">
  <div id="main-menu" class="modal invisible" data-fullscreen>
    <button class="btn-close js-modal" data-target="#main-menu"></button>
    <div class="modal__content">
      <nav class="nav tp-text--center">
        <ul class="nav__list">
          <?php if (!$mainPage) { ?>
            <li class="nav__item"><a href="index.php" class="nav__link">Главная</a></li>
          <?php } ?>
          <?php foreach ($womans as $woman) { ?>
            <?php if ($currentPage !== $woman['url']) { ?>
              <li class="nav__item"><a href="<?=$woman['url'];?>" class="nav__link<?php if (!$woman['active']) { ?> disabled<?php } ?>"><?=$woman['name'];?></a></li>
            <?php } ?>
          <?php } ?>
        </ul>
      </nav>
        <button style="margin: 0 auto 20px;display: block;" class="btn btn--big btn--dark js-modal mt-5 a-fade-slide a-ordered" data-target="#competition">конкурс</button>
      <div class="modal__socials social">
        <div class="social__title">Поделиться проектом в социальных сетях:</div>
        <a href="#" class="social__link" target="_blank" data-type="fb">
          <svg class="icon social__icon">
            <use xlink:href="#facebook"/>
          </svg>
        </a>
        <a href="#" class="social__link" target="_blank" data-type="vk">
          <svg class="icon social__icon">
            <use xlink:href="#vk"/>
          </svg>
        </a>
        <a href="#" class="social__link" target="_blank" data-type="tw">
          <svg class="icon social__icon">
            <use xlink:href="#twitter"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>
<div class="modal__wrapper modal__wrapper--aside invisible">
  <div id="competition" class="modal modal--aside invisible">
      <div class="modal__content">
          <div class="modal__subheading tp-heading--big tp-text--center"><a href="<?=$root?>build/assets/docs/rules.pdf" target="_blank">О конкурсе</a></div>
          <div class="modal__heading tp-heading--huge tp-text--center">Конкурс</div>
          <div class="modal__text">
              <div class="tp-body--main tp-text--center">
                  <p>Женственность и элегантность - новые критерии успеха для женщин. L’Occitane совместно с Psychologies предлагает принять участие в проекте об успешных женщинах и написать короткий манифест о том, что для вас женственность.</p>
                  <p>Достаточно в период <br/> с 20.09.17 по 20.10.17 <br/> выложить личную фотографию в Instagram c подписью, рассказывающей ваше отношение к женственности,</p>
                  <p>поставить хэштег<br/> <span class="highlight">#LoccitaneDivine</span><br/> и отметить на фото @loccitane_ru</p>
                  <p>Мы выберем три лучшие работы по хэштегу и 30 октября объявим победителей, которые получат новинки L'Occitane для двухэтапного очищения кожи лица из линии Divine.</p>
                  <div class="_sep"></div>
                  <p>Ваш подарок по промокоду DIVINE: 1 000 Р при покупке от 3&nbsp;000&nbsp;Р и Крем Божественный Иммортель 4 мл при любой покупке! Только в интернет-магазине L’OCCITANE до 11 октября </p>
                  <a href="http://www.loccitane.ru/immortelle-collection,9,2,73834,806143.htm?utm_source=psychologies&utm_medium=interview_lyutaeva&utm_campaign=RURU_divineOil_storeVisit_skincare_immortelleDivine" class="btn mt-3 mb-5 a-fade-slide a-ordered" target="_blank">Купить</a>
                  <p class="_code">Промокод: <b>DIVINE</b></p>
              </div>
          </div>
          <button class="btn-close btn-close--big btn--primary-dark btn--center js-modal" data-target="#competition"></button>
      </div>
  </div>
</div>