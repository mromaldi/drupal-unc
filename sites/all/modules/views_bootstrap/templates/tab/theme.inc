<?php

/**
 * Implementation of template preprocess for the view.
 */
function template_preprocess_views_bootstrap_tab_plugin_style(&$vars) {
  $view = &$vars['view'];
  $tab_field = $vars['options']['tab_field'];

  $vars['tab_type'] = $vars['options']['tab_type'];
  $vars['justified'] = $vars['options']['justified'];
  $vars['html_tab_title'] = $vars['options']['html_tab_title'];

  // Get tabs.
  if (isset($view->field[$tab_field])) {
    foreach ($vars['view']->result as $key => $field) {
      if($vars['html_tab_title']) {
               $vars['tabs'][$key] = $view->style_plugin->get_field($key, $tab_field);
           } else {
               $vars['tabs'][$key] = $view->style_plugin->get_field_value($key, $tab_field);
           }
    }
  }
}
