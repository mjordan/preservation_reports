<?php

namespace Drupal\preservation_reports\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
* Controller.
*/
class ReportsController extends ControllerBase {
  /**
   * Basic reports.
   *
   * @return string
   */
   public function reports() {
     return [
       '#theme' => 'preservation_reports_chart',
       '#chart' => TRUE,
       '#pieheading' => "Sample chart showing relative percentages of Preservation Master MIME types",
       '#lineheading' => "Sample chart showing fixity check event failures over time",
     ];
   }
}
