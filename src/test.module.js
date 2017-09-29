import {
  angular, CoreModule
} from 'milenstanev/mstanev.angular.1.x.x.core';

import {
  TestComponent
} from './test.component.js';

export const appTest = angular
  .module('test', [
    CoreModule
  ])
  .component('testComponent', TestComponent)
  .name;

