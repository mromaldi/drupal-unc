<?php

/**
 * Implements hook_panels_layouts().
 */
// Plugin definition
$plugin = array(
  'title' => t('Layout UNC Perfil'),
  'category' => t('Bootstrap'),
  'icon' => 'bootstrap_unc_perfil.png',
  'theme' => 'bootstrap_unc_perfil',
  'admin css' => 'panels-bootstrap-layouts-admin-unc.css',
  'regions' => array(
    'slider_noticias' => t('Slider Noticas'),
    'cintas_desplegables' => t('Cintas Desplegables'),
    'novedades' => t('Novedades'),
    'videos' => t('Videos'),
    'tira_banners' => t('Tira Banners'),
  ),
);
