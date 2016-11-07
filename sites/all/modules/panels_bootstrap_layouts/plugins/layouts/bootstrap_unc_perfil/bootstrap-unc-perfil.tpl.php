<div class="<?php print $classes ?>" <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>
  <?php if ($content['slider_noticias']): ?>
    <div class="row">
      <div class="col-xs-12 col-md-12">
        <?php print $content['slider_noticias']; ?>
      </div>
    </div>
  <?php endif ?>
  <?php if ($content['cintas_desplegables']): ?>
    <div class="row">
      <div class="col-xs-12 col-md-12">
        <?php print $content['cintas_desplegables']; ?>
      </div>
    </div>
  <?php endif ?>

  <?php if ($content['novedades'] || $content['videos']): ?>
    <div class="row">
      <div class="col-xs-12 col-md-6">
        <?php print $content['novedades']; ?>
      </div>
      <div class="col-xs-12 col-md-6">
        <?php print $content['videos']; ?>
      </div> 
    </div>
  <?php endif ?>


  <?php if ($content['tira_banners']): ?>
    <div class="row">
      <div class="col-xs-10 col-md-10 col-md-offset-1">
        <?php print $content['tira_banners']; ?>
      </div>
    </div>
  <?php endif ?>

</div>
