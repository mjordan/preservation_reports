<?php

namespace Drupal\preservation_reports\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
* Controller.
*/
class ReportsController extends ControllerBase {
  /**
   * Minimalist route for showing reports.
   *
   * @return string
   */
   public function reports() {
     return [
       '#markup' => $this->t('Below are some reports.')
     ];
   }
}
