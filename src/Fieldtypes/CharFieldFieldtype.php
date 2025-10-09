<?php

namespace AppsWithLove\Statamic\CharField\Fieldtypes;

use Statamic\Fields\Fieldtype;

class CharFieldFieldtype extends Fieldtype
{
    protected $icon = 'integer';
    protected $component = 'char_field';

    protected function configFieldItems(): array
    {
        return [
            'translations' => [
                'type' => 'array',
                'default' => [
                    'ideal_x' => __('statamic-charfield::fieldtypes.ideal_x'),
                    'min_x' => __('statamic-charfield::fieldtypes.min_x'),
                    'max_x' => __('statamic-charfield::fieldtypes.max_x'),
                    'current' => __('statamic-charfield::fieldtypes.current'),
                ],
            ],
            'input_type' => [
                'display' => __('statamic-charfield::fieldtypes.input_type'),
                'type' => 'select',
                'default' => 'input',
                'options' => [
                    'text' => 'Input',
                    'textarea' => 'Textarea',
                ],
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
