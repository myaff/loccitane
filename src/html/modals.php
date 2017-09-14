<div class="modal__wrapper invisible">
  <div id="main-menu" class="modal invisible" data-fullscreen>
    <button class="btn-close js-modal" data-target="#main-menu"></button>
    <div class="modal__content">
      <nav class="nav tp-text--center">
        <ul class="nav__list">
          <li class="nav__item"><a href="index.php" class="nav__link">Главная</a></li>
          <li class="nav__item"><a href="guseva.php" class="nav__link disabled">Екатерина Гусева</a></li>
          <li class="nav__item"><a href="podkaminskaya.php" class="nav__link disabled">Елена Подкаминская</a></li>
          <li class="nav__item"><a href="liutaeva.php" class="nav__link disabled">Татьяна Лютаева</a></li>
          <li class="nav__item"><a href="kurkova.php" class="nav__link disabled">Равшана Куркова</a></li>
        </ul>
      </nav>
      <div class="modal__socials social">
        <div class="social__title">Поделиться проектом в социальных сетях:</div>
        <a href="#" class="social__link" target="_blank">
          <svg class="icon social__icon">
            <use xlink:href="#facebook"/>
          </svg>
        </a>
        <a href="#" class="social__link" target="_blank">
          <svg class="icon social__icon">
            <use xlink:href="#vk"/>
          </svg>
        </a>
        <a href="#" class="social__link" target="_blank">
          <svg class="icon social__icon">
            <use xlink:href="#twitter"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
  <div id="order" class="modal invisible" data-fullscreen>
    <button class="btn-close js-modal" data-target="#order"></button>
    <div class="modal__heading modal__heading--vertical">
      <div class="modal__heading-text tp-heading--huge">Предзаказ</div>
    </div>
    <div class="modal__content">
      <div class="order-form__wrapper">
        <div class="order-form__text tp-body--large tp-body--invert">
          <p>
            <span>Cделайте&nbsp;</span><br/>
            <span>предзаказ прямо&nbsp;</span><br/>
            <span>сейчас. При&nbsp;</span><br/>
            <span>покупке часов&nbsp;</span><br/>
            <span>вас ждет&nbsp;</span><br/>
            <span>подарок от&nbsp;</span><br/>
            <span>бренда</span>
          </p>
        </div>
        <form action="" class="order-form">
          <div class="field field--fullwidth">
            <label for="order-form-email" class="field__label">
              <input id="order-form-email" type="email" class="field__input"/>
              <div class="field__placeholder">Ваш E-mail</div>
            </label>
          </div>
          <div class="field field--fullwidth">
            <label for="order-form-location" class="field__label">
              <input id="order-form-location" type="text" class="field__input"/>
              <div class="field__placeholder">Ваш город</div>
            </label>
          </div>
          <button class="btn btn--dark btn--fullwidth btn--wide">Отправить</button>
          <div class="field field--fullwidth">
            <label for="order-form-agreement" class="field__label field__label--check">
              <input id="order-form-agreement" type="checkbox" class="field__check" value="1" checked/>
              <span class="field__label-text">Я согласен на обработку своих персональных данных</span>
            </label>
          </div>
        </form>
      </div>
      <div class="order-form__message hidden">
        <div class="order-form__text tp-body--large tp-body--invert">
          <p>
            <span>Спасибо, ваша&nbsp;</span><br/>
            <span>заявка принята&nbsp;</span><br/>
            <span>с вами свяжутся&nbsp;</span><br/>
            <span>в ближайшее&nbsp;</span><br/>
            <span>время!&nbsp;</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>