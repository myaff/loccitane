<div class="all-girls mb-3 pt-5 pb-3">
  <?php foreach ($womans as $woman) { ?>
    <?php if ($currentPage !== $woman['url']) { ?>
      <div class="all-girls__item girl girl--small">
        <a href="<?=$woman['url'];?>" class="girl__link<?php if (!$woman['active']) { ?> disabled<?php } ?>">
          <div class="girl__photo"><img src="<?=$woman['img'];?>"></div>
          <div class="girl__name">
            <div class="girl__first-name"><?=explode(' ', $woman['name'])[0];?></div>
            <div class="girl__last-name"><?=explode(' ', $woman['name'])[1];?></div>
          </div>
        </a>
      </div>
    <?php } ?>
  <?php } ?>
</div>