// TODO: make more like ES2016 :)
import 'christopherthielen/ui-router-extras/release/modular/ct-ui-router-extras.core';
import 'christopherthielen/ui-router-extras/release/modular/ct-ui-router-extras.future';
import 'ocombe/ocLazyLoad';

export default function(angularModule, futureRoutes) {
  angularModule.requires.push('ui.router');
  angularModule.requires.push('ct.ui.router.extras.core');
  angularModule.requires.push('ct.ui.router.extras.future');
  angularModule.requires.push('oc.lazyLoad');

  const RouterConfig = ['$ocLazyLoadProvider', '$stateProvider', '$futureStateProvider',
    function($ocLazyLoadProvider, $stateProvider, $futureStateProvider) {

      $futureStateProvider.stateFactory('load', ['$q', '$ocLazyLoad', 'futureState',
        function($q, $ocLazyLoad, futureState) {

          let def = $q.defer();

          switch(futureState.moduleExport) {
            case 'module:name:constant':
              System.import(futureState.src).then(loaded => {
                $ocLazyLoad.load(
                  angular.module(futureState.moduleExportName)
                ).then(function() {
                  def.resolve();
                }, function(err) {
                  throw err;
                });
              });
            default:
              System.import(futureState.src).then(loaded => {
                let newModule = loaded;

                if (!loaded.name) {
                  /**
                   * @desc They are an issue in original file, missing {window} and Object can't be accessed in component closure!
                   *  - mstanev fix!
                   */
                  let key = window.Object.keys(loaded);
                  newModule = loaded[key[0]];
                }

                $ocLazyLoad.load(newModule).then(function() {
                  def.resolve();
                }, function(err) {
                  throw err;
                });
              });
          }

          return def.promise;
        }
      ]);

      futureRoutes.forEach(function(r) {
        $futureStateProvider.futureState(r);
      });
    }
  ];

  return RouterConfig;
}
