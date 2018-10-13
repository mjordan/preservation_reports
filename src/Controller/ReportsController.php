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
       '#markup' => $this->t('First chart/table goes here.')
     ];
   }
}
