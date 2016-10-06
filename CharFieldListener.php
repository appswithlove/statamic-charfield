<?php

namespace Statamic\Addons\CharField;

use Statamic\Extend\Listener;

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

    public function controlPanelHead()
    {
        return $this->css->tag("charfield-cp") . PHP_EOL;
    }
}
