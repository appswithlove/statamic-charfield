<?php

namespace AppsWithLove\Statamic\CharField;

use AppsWithLove\Statamic\CharField\Fieldtypes\CharFieldFieldtype;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    public function boot()
    {
        parent::boot();

        $this->loadTranslationsFrom(__DIR__.'/../resources/lang', 'statamic-charfield');
    }
    protected $scripts = [
        __DIR__.'/../resources/js/fieldtype.js',
    ];

    protected $stylesheets = [
        __DIR__.'/../resources/css/cp.css',
    ];

    protected $fieldtypes = [
        CharFieldFieldtype::class,
    ];
}
