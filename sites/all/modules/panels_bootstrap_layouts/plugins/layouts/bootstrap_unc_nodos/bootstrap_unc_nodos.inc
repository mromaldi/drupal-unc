<?php

/**
 * Implements hook_panels_layouts().
 */
// Plugin definition
$plugin = array(
  'title' => t('Layout Nodos UNC'),
  'category' => t('Bootstrap'),
  'icon' => 'bootstrap_unc_nodos.png',
  'theme' => 'bootstrap_unc_nodos',
  'admin css' => 'panels-bootstrap-layouts-admin-unc.css',
  'regions' => array(
    'top' => t('Top'),
    'sidebarleft' => t('Content'),
    'contentr' => t('Sidebar'),
    'bottom' => t('Bottom'),

  ),
);
