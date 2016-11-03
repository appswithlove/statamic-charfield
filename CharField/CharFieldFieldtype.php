<?php
/**
 * @author Rémy M. Böhler
 */

namespace Statamic\Addons\CharField;

use Statamic\Extend\Fieldtype;

/**
 * Class CharFieldFieldtype
 * @package Statamic\Addons\CharField
 */
class CharFieldFieldtype extends Fieldtype
{
    /**
     * The blank/default value
     *
     * @return array
     */
    public function blank()
    {
        return null;
    }

    /**
     * Pre-process the data before it gets sent to the publish page
     *
     * @param mixed $data
     * @return array|mixed
     */
    public function preProcess($data)
    {
        return $data;
    }

    /**
     * Process the data before it gets saved
     *
     * @param mixed $data
     * @return array|mixed
     */
    public function process($data)
    {
        return $data;
    }
}
