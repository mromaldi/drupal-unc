<?php

/**
 * Implements hook_panels_layouts().
 */
// Plugin definition
$plugin = array(
  'title' => t('Layout UNC Ambiente'),
  'category' => t('Bootstrap'),
  'icon' => 'bootstrap_unc_ambiente.png',
  'theme' => 'bootstrap_unc_ambiente',
  'admin css' => 'panels-bootstrap-layouts-admin-unc.css',
  'regions' => array(
    'links_administrativos' => t('Links de Creación'),
    'gente_grupo' => t('Gente en el Grupo'),
    'slider_noticias' => t('Slider Noticias'),
    'tira_banner' => t('Tira Banner'),
    'novedades' => t('Novedades'),
    'videos' => t('Videos'),
    'multimedia' => t('Multimedia'),
    'contacto' => t('Contacto'),
  ),
);
