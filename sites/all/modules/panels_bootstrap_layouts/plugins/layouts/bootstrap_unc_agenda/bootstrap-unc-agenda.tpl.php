<div class="<?php print $classes ?>" <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>
  <?php if ($content['slider_eventos']): ?>
    <div class="row">
      <div class="col-xs-12 col-md-12">
        <?php print $content['slider_eventos']; ?>
      </div>
    </div>
  <?php endif ?>

  <?php if ($content['eventos_destacados2'] || $content['calendar']): ?>
    <div class="row">
      <div class="col-xs-12 col-md-8">
        <?php print $content['eventos_destacados2']; ?>
      </div>
      <div class="col-xs-12 col-md-4">
        <?php print $content['calendar']; ?>
      </div> 
    </div>
  <?php endif ?>


  <?php if ($content['eventos_agrupados']): ?>
    <div class="row">
      <div class="col-xs-12 col-md-12">

        <?php print $content['eventos_agrupados']; ?>
      </div>
    </div>
  <?php endif ?>

</div>
