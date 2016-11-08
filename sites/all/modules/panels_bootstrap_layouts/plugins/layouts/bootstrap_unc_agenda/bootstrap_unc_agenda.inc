<?php

/**
 * Implements hook_panels_layouts().
 */
// Plugin definition
$plugin = array(
  'title' => t('Layout AGENDA UNC'),
  'category' => t('Bootstrap'),
  'icon' => 'bootstrap_unc_agenda.png',
  'theme' => 'bootstrap_unc_agenda',
  'admin css' => 'panels-bootstrap-layouts-admin-unc.css',
  'regions' => array(
    'slider_eventos' => t('Slider Eventos'),
    'eventos_destacados2' => t('Eventos destacados'),
    'calendar' => t('Calendar'),
    'eventos_agrupados' => t('Eventos Agrupados'),

  ),
);
