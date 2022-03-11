<?php

/*
 * This file is part of justoverclock/justblab.
 *
 * Copyright (c) 2022 Marco Colia.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Justoverclock\JustBlab;

use Flarum\Extend;
use Flarum\Api\Event\Serializing;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    new Extend\Locales(__DIR__.'/locale'),
    (new Extend\Settings)
        ->serializeToForum('justoverclock-justblab.absoluteEndpoint', 'justoverclock-justblab.absoluteEndpoint')
        ->serializeToForum('justoverclock-justblab.onlineUserLabel', 'justoverclock-justblab.onlineUserLabel')
];
