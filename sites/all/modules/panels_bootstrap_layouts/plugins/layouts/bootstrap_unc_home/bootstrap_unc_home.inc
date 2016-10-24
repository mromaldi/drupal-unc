<?php

/**
 * Implements hook_panels_layouts().
 */
// Plugin definition
$plugin = array(
  'title' => t('Layout UNC Home'),
  'category' => t('Bootstrap'),
  'icon' => 'bootstrap_unc_home.png',
  'theme' => 'bootstrap_unc_home',
  'admin css' => 'panels-bootstrap-layouts-admin-unc.css',
  'regions' => array(
    'slider_noticias' => t('Slider Noticas'),
    'tira_banner' => t('Tira Banner'),
    'tira_noticias' => t('Tira Noticias'),
    'novedades' => t('Novedades'),
    'videos' => t('Videos'),
    'agenda' => t('Agenda'),
    'servicios' => t('Servicios'),
    'contacto' => t('Contacto'),
  ),
);
