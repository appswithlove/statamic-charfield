<?php
/**
 * @author Rémy M. Böhler
 */

namespace Statamic\Addons\CharField;

use Statamic\Extend\Listener;

/**
 * Class CharFieldListener
 * @package Statamic\Addons\CharField
 */
class CharFieldListener extends Listener
{
    /**
     * The events to be listened for, and the methods to call.
     *
     * @var array
     */
    public $events = [
        'cp.add_to_head' => 'controlPanelHead',
    ];

    /**
     * @return string
     */
    public function controlPanelHead()
    {
        return $this->css->tag("charfield-cp") . PHP_EOL;
    }
}
