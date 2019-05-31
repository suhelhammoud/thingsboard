/*
 * Copyright © 2016-2019 The Thingsboard Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import './top-menu.scss';

import thingsboardMenu from '../services/menu.service';
import thingsboardMenuLink from './menu-link.directive';

/* eslint-disable import/no-unresolved, import/default */

// import sidemenuTemplate from './side-menu.tpl.html';
import topmenuTemplate from './top-menu.tpl.html';

/* eslint-enable import/no-unresolved, import/default */

export default angular.module('thingsboard.directives.topMenu', [thingsboardMenu, thingsboardMenuLink])
    .directive('tbTopMenu', TopMenu)
    .name;
    

/*@ngInject*/
function TopMenu($compile, $templateCache, menu) {

    var linker = function (scope, element) {

        scope.sections = menu.getSections();

        var template = $templateCache.get(topmenuTemplate);

        element.html(template);

        $compile(element.contents())(scope);
    }

    return {
        restrict: "E",
        link: linker,
        scope: {}
    };
}
