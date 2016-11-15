<div class="<?php print $classes ?>" <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>
  <?php if ($content['top']): ?>
    <div class="row">
      <div class="col-xs-12 col-md-12">
        <?php print $content['top']; ?>
      </div>
    </div>
  <?php endif ?>

  <?php if ($content['sidebarleft'] || $content['contentr']): ?>
    <div class="row">
      <div class="col-xs-12 col-md-2">
        <?php print $content['sidebarleft']; ?>
      </div>
      <div class="col-xs-12 col-md-10">
        <?php print $content['contentr']; ?>
      </div> 
    </div>
  <?php endif ?>


  <?php if ($content['bottom']): ?>
    <div class="row">
      <div class="col-xs-12 col-md-12">

        <?php print $content['bottom']; ?>
      </div>
    </div>
  <?php endif ?>

</div>
