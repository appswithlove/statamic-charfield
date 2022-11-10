<?php

namespace AppsWithLove\Statamic\CharField\Fieldtypes;

use Statamic\Fields\Fieldtype;

class CharFieldFieldtype extends Fieldtype
{
    protected $icon = 'integer';

    protected function configFieldItems(): array
    {
        return [
            'input_type' => [
                'display' => __('statamic-charfield::fieldtypes.input_type'),
                'type' => 'select',
                'default' => 'input',
                'options' => [
                    'text' => 'Input',
                    'textarea' => 'Textarea',
                ]
            ],
            'low' => [
                'display' => __('statamic-charfield::fieldtypes.low'),
                'type' => 'integer',
                'width' => 50,
            ],
            'high' => [
                'display' => __('statamic-charfield::fieldtypes.high'),
                'type' => 'integer',
                'width' => 50,
            ],
            'optimal_min' => [
                'display' => __('statamic-charfield::fieldtypes.optimal_min'),
                'type' => 'integer',
                'width' => 50,
            ],
            'optimal_max' => [
                'display' => __('statamic-charfield::fieldtypes.optimal_max'),
                'type' => 'integer',
                'width' => 50,
            ],
            'hard_limit' => [
                'display' => __('statamic-charfield::fieldtypes.hard_limit'),
                'type' => 'integer',
                'width' => 50,
            ],
        ];
    }
}
