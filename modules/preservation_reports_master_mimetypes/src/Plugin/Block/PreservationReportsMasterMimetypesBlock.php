<?php

/**
 * @file
 */

namespace Drupal\preservation_reports_master_mimetypes\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Block\BlockPluginInterface;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides a block showing the Fedora Turtle representation of the object.
 *
 * @Block(
 * id = "preservation_reports_master_mimetypes",
 * admin_label = @Translation("Frequency of mime types used by specified Media type"),
 * category = @Translation("Islandora"),
 * )
 */
class PreservationReportsMasterMimetypesBlock extends BlockBase implements BlockPluginInterface {
  /**
   * {@inheritdoc}
   */
  public function build() {
    return array (
      // '#theme' => 'islandora_whole_object_block_pre',
      // '#content' => $response_output,
      '#markup' => $this->t('Hello from the Preservation Reports master mimetype chart')
    );
  }
}
