import {
  angular, CoreModule
} from 'angular-core';

import router from './router';

const appLazyLoadRouterModule = 'jspm.angular.lazyload-router';
const futureRoutesCollection = [];

angular.module(appLazyLoadRouterModule, [
    CoreModule
  ])
  .config(router(
    angular.module(appLazyLoadRouterModule),
    futureRoutesCollection
  ));

export {
  futureRoutesCollection,
  appLazyLoadRouterModule
};
