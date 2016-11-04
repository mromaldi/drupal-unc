<div class="row">
<div id="views-bootstrap-accordion-<?php print $id ?>" class="<?php print $classes ?>">
<?php
//print_r($rows);
//echo "--------------------";
$ccol=3;//siempre som tres columnas
$items=count($rows);
$item_x_col=round($items/$ccol);
$cols=array_chunk($rows,$item_x_col);
$key=0;
foreach ($cols as $key1 => $rows2){
    echo "<div class=\"col col-lg-4\">";
    
    foreach ($rows2 as $key2 => $row): ?>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a class="accordion-toggle"
             data-toggle="collapse"
             data-parent="#views-bootstrap-accordion-<?php print $id ?>"
             href="#collapse<?php print $key ?>">
            <?php print $titles[$key] ?>
          </a>
        </h4>
      </div>

      <div id="collapse<?php print $key ?>" class="panel-collapse collapse">
        <div class="panel-body">
          <?php
          print $row 
          ?>
        </div>
      </div>
    </div>
  <?php unset($row); endforeach ?>


<?php
    $key++;
    unset($row2);
    echo "</div>";
}
?>
</div>
</div>
