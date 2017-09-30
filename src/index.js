import {
  angular, CoreModule
} from 'milenstanev/mstanev.angular.1.x.x.core';

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
