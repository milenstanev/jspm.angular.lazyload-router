!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);void 0!==c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["3"], ["2"], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
!function(e){function r(e,r){for(var n=e.split(".");n.length;)r=r[n.shift()];return r}function n(n){if("string"==typeof n)return r(n,e);if(!(n instanceof Array))throw new Error("Global exports must be a string or array.");for(var t={},o=!0,f=0;f<n.length;f++){var i=r(n[f],e);o&&(t["default"]=i,o=!1),t[n[f].split(".").pop()]=i}return t}function t(r){if(Object.keys)Object.keys(e).forEach(r);else for(var n in e)a.call(e,n)&&r(n)}function o(r){t(function(n){if(-1==l.call(s,n)){try{var t=e[n]}catch(o){s.push(n)}r(n,t)}})}var f,i=$__System,a=Object.prototype.hasOwnProperty,l=Array.prototype.indexOf||function(e){for(var r=0,n=this.length;n>r;r++)if(this[r]===e)return r;return-1},s=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];i.set("@@global-helpers",i.newModule({prepareGlobal:function(r,t,i){var a=e.define;e.define=void 0;var l;if(i){l={};for(var s in i)l[s]=e[s],e[s]=i[s]}return t||(f={},o(function(e,r){f[e]=r})),function(){var r;if(t)r=n(t);else{r={};var i,s;o(function(e,n){f[e]!==n&&"undefined"!=typeof n&&(r[e]=n,"undefined"!=typeof i?s||i===n||(s=!0):i=n)}),r=s?r:i}if(l)for(var u in l)e[u]=l[u];return e.define=a,r}}}))}("undefined"!=typeof self?self:global);
$__System.registerDynamic("4", [], false, function ($__require, $__exports, $__module) {
  var _retrieveGlobal = $__System.get("@@global-helpers").prepareGlobal($__module.id, null, null);

  (function ($__global) {
    /**
     * UI-Router Extras: Sticky states, Future States, Deep State Redirect, Transition promise
     * Module: core
     * @version 0.1.3
     * @link http://christopherthielen.github.io/ui-router-extras/
     * @license MIT License, http://www.opensource.org/licenses/MIT
     */
    (function (angular, undefined) {
      "use strict";

      var mod_core = angular.module("ct.ui.router.extras.core", ["ui.router"]);

      var internalStates = {},
          stateRegisteredCallbacks = [];
      mod_core.config(['$stateProvider', '$injector', function ($stateProvider, $injector) {
        // Decorate any state attribute in order to get access to the internal state representation.
        $stateProvider.decorator('parent', function (state, parentFn) {
          // Capture each internal UI-Router state representations as opposed to the user-defined state object.
          // The internal state is, e.g., the state returned by $state.$current as opposed to $state.current
          internalStates[state.self.name] = state;
          // Add an accessor for the internal state from the user defined state
          state.self.$$state = function () {
            return internalStates[state.self.name];
          };

          angular.forEach(stateRegisteredCallbacks, function (callback) {
            callback(state);
          });
          return parentFn(state);
        });
      }]);

      var DEBUG = false;

      var forEach = angular.forEach;
      var extend = angular.extend;
      var isArray = angular.isArray;

      var map = function (collection, callback) {
        "use strict";

        var result = [];
        forEach(collection, function (item, index) {
          result.push(callback(item, index));
        });
        return result;
      };

      var keys = function (collection) {
        "use strict";

        return map(collection, function (collection, key) {
          return key;
        });
      };

      var filter = function (collection, callback) {
        "use strict";

        var result = [];
        forEach(collection, function (item, index) {
          if (callback(item, index)) {
            result.push(item);
          }
        });
        return result;
      };

      var filterObj = function (collection, callback) {
        "use strict";

        var result = {};
        forEach(collection, function (item, index) {
          if (callback(item, index)) {
            result[index] = item;
          }
        });
        return result;
      };

      // Duplicates code in UI-Router common.js
      function ancestors(first, second) {
        var path = [];

        for (var n in first.path) {
          if (first.path[n] !== second.path[n]) break;
          path.push(first.path[n]);
        }
        return path;
      }

      // Duplicates code in UI-Router common.js
      function objectKeys(object) {
        if (Object.keys) {
          return Object.keys(object);
        }
        var result = [];

        angular.forEach(object, function (val, key) {
          result.push(key);
        });
        return result;
      }

      /**
       * like objectKeys, but includes keys from prototype chain.
       * @param object the object whose prototypal keys will be returned
       * @param ignoreKeys an array of keys to ignore
       */
      // Duplicates code in UI-Router common.js
      function protoKeys(object, ignoreKeys) {
        var result = [];
        for (var key in object) {
          if (!ignoreKeys || ignoreKeys.indexOf(key) === -1) result.push(key);
        }
        return result;
      }

      // Duplicates code in UI-Router common.js
      function arraySearch(array, value) {
        if (Array.prototype.indexOf) {
          return array.indexOf(value, Number(arguments[2]) || 0);
        }
        var len = array.length >>> 0,
            from = Number(arguments[2]) || 0;
        from = from < 0 ? Math.ceil(from) : Math.floor(from);

        if (from < 0) from += len;

        for (; from < len; from++) {
          if (from in array && array[from] === value) return from;
        }
        return -1;
      }

      // Duplicates code in UI-Router common.js
      // Added compatibility code  (isArray check) to support both 0.2.x and 0.3.x series of UI-Router.
      function inheritParams(currentParams, newParams, $current, $to) {
        var parents = ancestors($current, $to),
            parentParams,
            inherited = {},
            inheritList = [];

        for (var i in parents) {
          if (!parents[i].params) continue;
          // This test allows compatibility with 0.2.x and 0.3.x (optional and object params)
          parentParams = isArray(parents[i].params) ? parents[i].params : objectKeys(parents[i].params);
          if (!parentParams.length) continue;

          for (var j in parentParams) {
            if (arraySearch(inheritList, parentParams[j]) >= 0) continue;
            inheritList.push(parentParams[j]);
            inherited[parentParams[j]] = currentParams[parentParams[j]];
          }
        }
        return extend({}, inherited, newParams);
      }

      function inherit(parent, extra) {
        return extend(new (extend(function () {}, { prototype: parent }))(), extra);
      }

      function onStateRegistered(callback) {
        stateRegisteredCallbacks.push(callback);
      }

      mod_core.provider("uirextras_core", function () {
        var core = {
          internalStates: internalStates,
          onStateRegistered: onStateRegistered,
          forEach: forEach,
          extend: extend,
          isArray: isArray,
          map: map,
          keys: keys,
          filter: filter,
          filterObj: filterObj,
          ancestors: ancestors,
          objectKeys: objectKeys,
          protoKeys: protoKeys,
          arraySearch: arraySearch,
          inheritParams: inheritParams,
          inherit: inherit
        };

        angular.extend(this, core);

        this.$get = function () {
          return core;
        };
      });
    })(angular);
  })(this);

  return _retrieveGlobal();
});
$__System.registerDynamic('5', [], false, function ($__require, $__exports, $__module) {
  var _retrieveGlobal = $__System.get("@@global-helpers").prepareGlobal($__module.id, null, null);

  (function ($__global) {
    /**
     * UI-Router Extras: Sticky states, Future States, Deep State Redirect, Transition promise
     * Module: future
     * @version 0.1.3
     * @link http://christopherthielen.github.io/ui-router-extras/
     * @license MIT License, http://www.opensource.org/licenses/MIT
     */
    (function (angular, undefined) {
      "use strict";

      (function (angular, undefined) {
        var app = angular.module('ct.ui.router.extras.future', ['ct.ui.router.extras.core']);

        _futureStateProvider.$inject = ['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', 'uirextras_coreProvider'];
        function _futureStateProvider($stateProvider, $urlRouterProvider, $urlMatcherFactory, uirextras_coreProvider) {
          var core = uirextras_coreProvider;
          var internalStates = core.internalStates;
          var stateFactories = {},
              futureStates = {};
          var lazyloadInProgress = false,
              resolveFunctions = [],
              initPromise,
              initDone = false;
          var provider = this;

          // This function registers a promiseFn, to be resolved before the url/state matching code
          // will reject a route.  The promiseFn is injected/executed using the runtime $injector.
          // The function should return a promise.
          // When all registered promises are resolved, then the route is re-sync'ed.

          // Example: function($http) {
          //  return $http.get('//server.com/api/DynamicFutureStates').then(function(data) {
          //    angular.forEach(data.futureStates, function(fstate) { $futureStateProvider.futureState(fstate); });
          //  };
          // }
          this.addResolve = function (promiseFn) {
            resolveFunctions.push(promiseFn);
          };

          // Register a state factory function for a particular future-state type.  This factory, given a future-state object,
          // should create a ui-router state.
          // The factory function is injected/executed using the runtime $injector.  The future-state is injected as 'futureState'.

          // Example:
          //    $futureStateProvider.stateFactory('test', function(futureState) {
          //      return {
          //        name: futureState.stateName,
          //        url: futureState.urlFragment,
          //        template: '<h3>Future State Template</h3>',
          //        controller: function() {
          //          console.log("Entered state " + futureState.stateName);
          //        }
          //      }
          //    });
          this.stateFactory = function (futureStateType, factory) {
            stateFactories[futureStateType] = factory;
          };

          this.futureState = function (futureState) {
            if (futureState.stateName) // backwards compat for now
              futureState.name = futureState.stateName;
            if (futureState.urlPrefix) // backwards compat for now
              futureState.url = "^" + futureState.urlPrefix;

            futureStates[futureState.name] = futureState;
            var parentMatcher,
                parentName = futureState.name.split(/\./).slice(0, -1).join("."),
                realParent = findState(futureState.parent || parentName);
            if (realParent) {
              parentMatcher = realParent.url || realParent.navigable && realParent.navigable.url;
            } else if (parentName === "") {
              parentMatcher = $urlMatcherFactory.compile("");
            } else {
              var futureParent = findState(futureState.parent || parentName, true);
              if (!futureParent) throw new Error("Couldn't determine parent state of future state. FutureState:" + angular.toJson(futureState));
              var pattern;
              if (futureParent.urlMatcher) {
                pattern = futureParent.urlMatcher.source.replace(/\*rest$/, "");
              } else {
                // if the futureParent doesn't have a urlMatcher, then we are still
                // starting from the beginning of the path
                pattern = "";
              }
              parentMatcher = $urlMatcherFactory.compile(pattern);
              futureState.parentFutureState = futureParent;
            }
            if (futureState.url) {
              futureState.urlMatcher = futureState.url.charAt(0) === "^" ? $urlMatcherFactory.compile(futureState.url.substring(1) + "*rest") : parentMatcher.concat(futureState.url + "*rest");
            }
          };

          this.get = function () {
            return angular.extend({}, futureStates);
          };

          function findState(stateOrName, findFutureState) {
            var statename = angular.isObject(stateOrName) ? stateOrName.name : stateOrName;
            return !findFutureState ? internalStates[statename] : futureStates[statename];
          }

          /* options is an object with at least a name or url attribute */
          function findFutureState($state, options) {
            if (options.name) {
              var nameComponents = options.name.split(/\./);
              if (options.name.charAt(0) === '.') nameComponents[0] = $state.current.name;
              while (nameComponents.length) {
                var stateName = nameComponents.join(".");
                if ($state.get(stateName, { relative: $state.current })) return null; // State is already defined; nothing to do
                if (futureStates[stateName]) return futureStates[stateName];
                nameComponents.pop();
              }
            }

            if (options.url) {
              var matches = [];
              for (var future in futureStates) {
                var matcher = futureStates[future].urlMatcher;
                if (matcher && matcher.exec(options.url)) {
                  matches.push(futureStates[future]);
                }
              }
              // Find most specific by ignoring matching parents from matches
              var copy = matches.slice(0);
              for (var i = matches.length - 1; i >= 0; i--) {
                for (var j = 0; j < copy.length; j++) {
                  if (matches[i] === copy[j].parentFutureState) matches.splice(i, 1);
                }
              }
              return matches[0];
            }
          }

          function lazyLoadState($injector, futureState) {
            lazyloadInProgress = true;
            var $q = $injector.get("$q");
            if (!futureState) {
              var deferred = $q.defer();
              deferred.reject("No lazyState passed in " + futureState);
              return deferred.promise;
            }

            var parentPromises = $q.when([]),
                parentFuture = futureState.parentFutureState;
            if (parentFuture && futureStates[parentFuture.name]) {
              parentPromises = lazyLoadState($injector, futureStates[parentFuture.name]);
            }

            var type = futureState.type;
            var factory = stateFactories[type];
            if (!factory) throw Error("No state factory for futureState.type: " + (futureState && futureState.type));

            var failedLoadPolicy = factory.$options && factory.$options.failedLazyLoadPolicy || "remove";
            function deregisterFutureState() {
              delete futureStates[futureState.name];
            }
            function errorHandler(err) {
              if (failedLoadPolicy === "remove") deregisterFutureState();
              return $q.reject(err);
            }

            return parentPromises.then(function (array) {
              var factoryPromise = $injector.invoke(factory, factory, { futureState: futureState });

              return factoryPromise.then(function (fullState) {
                deregisterFutureState(); // Success; remove future state
                if (fullState) {
                  array.push(fullState);
                } // Pass a chain of realized states back
                return array;
              });
            }).catch(errorHandler);
          }

          var otherwiseFunc = ['$log', '$location', function otherwiseFunc($log, $location) {
            //$log.debug("Unable to map " + $location.path());
          }];

          function futureState_otherwise($injector, $location) {
            var resyncing = false;

            var lazyLoadMissingState = ['$rootScope', '$urlRouter', '$state', function lazyLoadMissingState($rootScope, $urlRouter, $state) {
              function resync() {
                resyncing = true;$urlRouter.sync();resyncing = false;
              }
              if (!initDone) {
                // Asynchronously load state definitions, then resync URL
                initPromise().then(resync);
                initDone = true;
                return;
              }

              var futureState = findFutureState($state, { url: $location.path() });
              if (!futureState) {
                return $injector.invoke(otherwiseFunc);
              }

              // Config loaded.  Asynchronously lazy-load state definition from URL fragment, if mapped.
              lazyLoadState($injector, futureState).then(function lazyLoadedStateCallback(states) {
                states.forEach(function (state) {
                  if (state && (!$state.get(state) || state.name && !$state.get(state.name))) $stateProvider.state(state);
                });
                lazyloadInProgress = false;
                resync();
              }, function lazyLoadStateAborted() {
                lazyloadInProgress = false;
                resync();
              });
            }];
            if (lazyloadInProgress) return;

            var nextFn = resyncing ? otherwiseFunc : lazyLoadMissingState;
            return $injector.invoke(nextFn);
          }

          $urlRouterProvider.otherwise(futureState_otherwise);

          $urlRouterProvider.otherwise = function (rule) {
            if (angular.isString(rule)) {
              var redirect = rule;
              rule = function () {
                return redirect;
              };
            } else if (!angular.isFunction(rule)) throw new Error("'rule' must be a function");
            otherwiseFunc = ['$injector', '$location', rule];
            return $urlRouterProvider;
          };

          var serviceObject = {
            getResolvePromise: function () {
              return initPromise();
            }
          };

          // Used in .run() block to init
          this.$get = ['$injector', '$state', '$q', '$rootScope', '$urlRouter', '$timeout', '$log', function futureStateProvider_get($injector, $state, $q, $rootScope, $urlRouter, $timeout, $log) {
            function init() {
              $rootScope.$on("$stateNotFound", function futureState_notFound(event, unfoundState, fromState, fromParams) {
                if (lazyloadInProgress) return;
                //$log.debug("event, unfoundState, fromState, fromParams", event, unfoundState, fromState, fromParams);

                var futureState = findFutureState($state, { name: unfoundState.to });
                if (!futureState) return;

                event.preventDefault();
                var promise = lazyLoadState($injector, futureState);
                promise.then(function (states) {
                  states.forEach(function (state) {
                    if (state && (!$state.get(state) || state.name && !$state.get(state.name))) $stateProvider.state(state);
                  });
                  $state.go(unfoundState.to, unfoundState.toParams, unfoundState.options);
                  lazyloadInProgress = false;
                }, function (error) {
                  console.log("failed to lazy load state ", error);
                  if (fromState.name) $state.go(fromState, fromParams);
                  lazyloadInProgress = false;
                });
              });

              // Do this better.  Want to load remote config once, before everything else
              if (!initPromise) {
                var promises = [];
                angular.forEach(resolveFunctions, function (promiseFn) {
                  promises.push($injector.invoke(promiseFn));
                });
                initPromise = function () {
                  return $q.all(promises);
                };
              }

              // TODO: analyze this. I'm calling $urlRouter.sync() in two places for retry-initial-transition.
              // TODO: I should only need to do this once.  Pick the better place and remove the extra resync.
              initPromise().then(function retryInitialState() {
                $timeout(function () {
                  if ($state.transition) {
                    $state.transition.then(retryInitialState, retryInitialState);
                  } else {
                    $urlRouter.sync();
                  }
                });
              });
            }

            init();

            serviceObject.state = $stateProvider.state;
            serviceObject.futureState = provider.futureState;
            serviceObject.get = provider.get;

            return serviceObject;
          }];
        }

        app.provider('$futureState', _futureStateProvider);

        var statesAddedQueue = {
          state: function (state) {
            if (statesAddedQueue.$rootScope) statesAddedQueue.$rootScope.$broadcast("$stateAdded", state);
          },
          itsNowRuntimeOhWhatAHappyDay: function ($rootScope) {
            statesAddedQueue.$rootScope = $rootScope;
          },
          $rootScope: undefined
        };

        app.config(['$stateProvider', function ($stateProvider) {
          // decorate $stateProvider.state so we can broadcast when a real state was added
          var realStateFn = $stateProvider.state;
          $stateProvider.state = function state_announce() {
            var val = realStateFn.apply($stateProvider, arguments);

            var state = angular.isObject(arguments[0]) ? arguments[0] : arguments[1];
            statesAddedQueue.state(state);
            return val;
          };
        }]);

        // inject $futureState so the service gets initialized via $get();
        app.run(['$futureState', function ($futureState, $rootScope) {
          statesAddedQueue.itsNowRuntimeOhWhatAHappyDay($rootScope);
        }]);
      })(angular);
    })(angular);
  })(this);

  return _retrieveGlobal();
});
$__System.registerDynamic('6', [], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /**
     * oclazyload - Load modules on demand (lazy load) with angularJS
     * @version v1.0.10
     * @link https://github.com/ocombe/ocLazyLoad
     * @license MIT
     * @author Olivier Combe <olivier.combe@gmail.com>
     */
    (function (angular, window) {
        'use strict';

        var regModules = ['ng', 'oc.lazyLoad'],
            regInvokes = {},
            regConfigs = [],
            modulesToLoad = [],

        // modules to load from angular.module or other sources
        realModules = [],

        // real modules called from angular.module
        recordDeclarations = [],
            broadcast = angular.noop,
            runBlocks = {},
            justLoaded = [];

        var ocLazyLoad = angular.module('oc.lazyLoad', ['ng']);

        ocLazyLoad.provider('$ocLazyLoad', ["$controllerProvider", "$provide", "$compileProvider", "$filterProvider", "$injector", "$animateProvider", function ($controllerProvider, $provide, $compileProvider, $filterProvider, $injector, $animateProvider) {
            var modules = {},
                providers = {
                $controllerProvider: $controllerProvider,
                $compileProvider: $compileProvider,
                $filterProvider: $filterProvider,
                $provide: $provide, // other things (constant, decorator, provider, factory, service)
                $injector: $injector,
                $animateProvider: $animateProvider
            },
                debug = false,
                events = false,
                moduleCache = [],
                modulePromises = {};

            moduleCache.push = function (value) {
                if (this.indexOf(value) === -1) {
                    Array.prototype.push.apply(this, arguments);
                }
            };

            this.config = function (config) {
                // If we want to define modules configs
                if (angular.isDefined(config.modules)) {
                    if (angular.isArray(config.modules)) {
                        angular.forEach(config.modules, function (moduleConfig) {
                            modules[moduleConfig.name] = moduleConfig;
                        });
                    } else {
                        modules[config.modules.name] = config.modules;
                    }
                }

                if (angular.isDefined(config.debug)) {
                    debug = config.debug;
                }

                if (angular.isDefined(config.events)) {
                    events = config.events;
                }
            };

            /**
             * Get the list of existing registered modules
             * @param element
             */
            this._init = function _init(element) {
                // this is probably useless now because we override angular.bootstrap
                if (modulesToLoad.length === 0) {
                    var elements = [element],
                        names = ['ng:app', 'ng-app', 'x-ng-app', 'data-ng-app'],
                        NG_APP_CLASS_REGEXP = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/,
                        append = function append(elm) {
                        return elm && elements.push(elm);
                    };

                    angular.forEach(names, function (name) {
                        names[name] = true;
                        append(document.getElementById(name));
                        name = name.replace(':', '\\:');
                        if (typeof element[0] !== 'undefined' && element[0].querySelectorAll) {
                            angular.forEach(element[0].querySelectorAll('.' + name), append);
                            angular.forEach(element[0].querySelectorAll('.' + name + '\\:'), append);
                            angular.forEach(element[0].querySelectorAll('[' + name + ']'), append);
                        }
                    });

                    angular.forEach(elements, function (elm) {
                        if (modulesToLoad.length === 0) {
                            var className = ' ' + element.className + ' ';
                            var match = NG_APP_CLASS_REGEXP.exec(className);
                            if (match) {
                                modulesToLoad.push((match[2] || '').replace(/\s+/g, ','));
                            } else {
                                angular.forEach(elm.attributes, function (attr) {
                                    if (modulesToLoad.length === 0 && names[attr.name]) {
                                        modulesToLoad.push(attr.value);
                                    }
                                });
                            }
                        }
                    });
                }

                if (modulesToLoad.length === 0 && !((window.jasmine || window.mocha) && angular.isDefined(angular.mock))) {
                    console.error('No module found during bootstrap, unable to init ocLazyLoad. You should always use the ng-app directive or angular.boostrap when you use ocLazyLoad.');
                }

                var addReg = function addReg(moduleName) {
                    if (regModules.indexOf(moduleName) === -1) {
                        // register existing modules
                        regModules.push(moduleName);
                        var mainModule = angular.module(moduleName);

                        // register existing components (directives, services, ...)
                        _invokeQueue(null, mainModule._invokeQueue, moduleName);
                        _invokeQueue(null, mainModule._configBlocks, moduleName); // angular 1.3+

                        angular.forEach(mainModule.requires, addReg);
                    }
                };

                angular.forEach(modulesToLoad, function (moduleName) {
                    addReg(moduleName);
                });

                modulesToLoad = []; // reset for next bootstrap
                recordDeclarations.pop(); // wait for the next lazy load
            };

            /**
             * Like JSON.stringify but that doesn't throw on circular references
             * @param obj
             */
            var stringify = function stringify(obj) {
                try {
                    return JSON.stringify(obj);
                } catch (e) {
                    var cache = [];
                    return JSON.stringify(obj, function (key, value) {
                        if (angular.isObject(value) && value !== null) {
                            if (cache.indexOf(value) !== -1) {
                                // Circular reference found, discard key
                                return;
                            }
                            // Store value in our collection
                            cache.push(value);
                        }
                        return value;
                    });
                }
            };

            var hashCode = function hashCode(str) {
                var hash = 0,
                    i,
                    chr,
                    len;
                if (str.length == 0) {
                    return hash;
                }
                for (i = 0, len = str.length; i < len; i++) {
                    chr = str.charCodeAt(i);
                    hash = (hash << 5) - hash + chr;
                    hash |= 0; // Convert to 32bit integer
                }
                return hash;
            };

            function _register(providers, registerModules, params) {
                if (registerModules) {
                    var k,
                        moduleName,
                        moduleFn,
                        tempRunBlocks = [];
                    for (k = registerModules.length - 1; k >= 0; k--) {
                        moduleName = registerModules[k];
                        if (!angular.isString(moduleName)) {
                            moduleName = getModuleName(moduleName);
                        }
                        if (!moduleName || justLoaded.indexOf(moduleName) !== -1 || modules[moduleName] && realModules.indexOf(moduleName) === -1) {
                            continue;
                        }
                        // new if not registered
                        var newModule = regModules.indexOf(moduleName) === -1;
                        moduleFn = ngModuleFct(moduleName);
                        if (newModule) {
                            regModules.push(moduleName);
                            _register(providers, moduleFn.requires, params);
                        }
                        if (moduleFn._runBlocks.length > 0) {
                            // new run blocks detected! Replace the old ones (if existing)
                            runBlocks[moduleName] = [];
                            while (moduleFn._runBlocks.length > 0) {
                                runBlocks[moduleName].push(moduleFn._runBlocks.shift());
                            }
                        }
                        if (angular.isDefined(runBlocks[moduleName]) && (newModule || params.rerun)) {
                            tempRunBlocks = tempRunBlocks.concat(runBlocks[moduleName]);
                        }
                        _invokeQueue(providers, moduleFn._invokeQueue, moduleName, params.reconfig);
                        _invokeQueue(providers, moduleFn._configBlocks, moduleName, params.reconfig); // angular 1.3+
                        broadcast(newModule ? 'ocLazyLoad.moduleLoaded' : 'ocLazyLoad.moduleReloaded', moduleName);
                        registerModules.pop();
                        justLoaded.push(moduleName);
                    }
                    // execute the run blocks at the end
                    var instanceInjector = providers.getInstanceInjector();
                    angular.forEach(tempRunBlocks, function (fn) {
                        instanceInjector.invoke(fn);
                    });
                }
            }

            function _registerInvokeList(args, moduleName) {
                var invokeList = args[2][0],
                    type = args[1],
                    newInvoke = false;
                if (angular.isUndefined(regInvokes[moduleName])) {
                    regInvokes[moduleName] = {};
                }
                if (angular.isUndefined(regInvokes[moduleName][type])) {
                    regInvokes[moduleName][type] = {};
                }
                var onInvoke = function onInvoke(invokeName, invoke) {
                    if (!regInvokes[moduleName][type].hasOwnProperty(invokeName)) {
                        regInvokes[moduleName][type][invokeName] = [];
                    }
                    if (checkHashes(invoke, regInvokes[moduleName][type][invokeName])) {
                        newInvoke = true;
                        regInvokes[moduleName][type][invokeName].push(invoke);
                        broadcast('ocLazyLoad.componentLoaded', [moduleName, type, invokeName]);
                    }
                };

                function checkHashes(potentialNew, invokes) {
                    var isNew = true,
                        newHash;
                    if (invokes.length) {
                        newHash = signature(potentialNew);
                        angular.forEach(invokes, function (invoke) {
                            isNew = isNew && signature(invoke) !== newHash;
                        });
                    }
                    return isNew;
                }

                function signature(data) {
                    if (angular.isArray(data)) {
                        // arrays are objects, we need to test for it first
                        return hashCode(data.toString());
                    } else if (angular.isObject(data)) {
                        // constants & values for example
                        return hashCode(stringify(data));
                    } else {
                        if (angular.isDefined(data) && data !== null) {
                            return hashCode(data.toString());
                        } else {
                            // null & undefined constants
                            return data;
                        }
                    }
                }

                if (angular.isString(invokeList)) {
                    onInvoke(invokeList, args[2][1]);
                } else if (angular.isObject(invokeList)) {
                    angular.forEach(invokeList, function (invoke, key) {
                        if (angular.isString(invoke)) {
                            // decorators for example
                            onInvoke(invoke, invokeList[1]);
                        } else {
                            // components registered as object lists {"componentName": function() {}}
                            onInvoke(key, invoke);
                        }
                    });
                } else {
                    return false;
                }
                return newInvoke;
            }

            function _invokeQueue(providers, queue, moduleName, reconfig) {
                if (!queue) {
                    return;
                }

                var i, len, args, provider;
                for (i = 0, len = queue.length; i < len; i++) {
                    args = queue[i];
                    if (angular.isArray(args)) {
                        if (providers !== null) {
                            if (providers.hasOwnProperty(args[0])) {
                                provider = providers[args[0]];
                            } else {
                                throw new Error('unsupported provider ' + args[0]);
                            }
                        }
                        var isNew = _registerInvokeList(args, moduleName);
                        if (args[1] !== 'invoke') {
                            if (isNew && angular.isDefined(provider)) {
                                provider[args[1]].apply(provider, args[2]);
                            }
                        } else {
                            // config block
                            var callInvoke = function callInvoke(fct) {
                                var invoked = regConfigs.indexOf(moduleName + '-' + fct);
                                if (invoked === -1 || reconfig) {
                                    if (invoked === -1) {
                                        regConfigs.push(moduleName + '-' + fct);
                                    }
                                    if (angular.isDefined(provider)) {
                                        provider[args[1]].apply(provider, args[2]);
                                    }
                                }
                            };
                            if (angular.isFunction(args[2][0])) {
                                callInvoke(args[2][0]);
                            } else if (angular.isArray(args[2][0])) {
                                for (var j = 0, jlen = args[2][0].length; j < jlen; j++) {
                                    if (angular.isFunction(args[2][0][j])) {
                                        callInvoke(args[2][0][j]);
                                    }
                                }
                            }
                        }
                    }
                }
            }

            function getModuleName(module) {
                var moduleName = null;
                if (angular.isString(module)) {
                    moduleName = module;
                } else if (angular.isObject(module) && module.hasOwnProperty('name') && angular.isString(module.name)) {
                    moduleName = module.name;
                }
                return moduleName;
            }

            function moduleExists(moduleName) {
                if (!angular.isString(moduleName)) {
                    return false;
                }
                try {
                    return ngModuleFct(moduleName);
                } catch (e) {
                    if (/No module/.test(e) || e.message.indexOf('$injector:nomod') > -1) {
                        return false;
                    }
                }
            }

            this.$get = ["$log", "$rootElement", "$rootScope", "$cacheFactory", "$q", function ($log, $rootElement, $rootScope, $cacheFactory, $q) {
                var instanceInjector,
                    filesCache = $cacheFactory('ocLazyLoad');

                if (!debug) {
                    $log = {};
                    $log['error'] = angular.noop;
                    $log['warn'] = angular.noop;
                    $log['info'] = angular.noop;
                }

                // Make this lazy because when $get() is called the instance injector hasn't been assigned to the rootElement yet
                providers.getInstanceInjector = function () {
                    return instanceInjector ? instanceInjector : instanceInjector = $rootElement.data('$injector') || angular.injector();
                };

                broadcast = function broadcast(eventName, params) {
                    if (events) {
                        $rootScope.$broadcast(eventName, params);
                    }
                    if (debug) {
                        $log.info(eventName, params);
                    }
                };

                function reject(e) {
                    var deferred = $q.defer();
                    $log.error(e.message);
                    deferred.reject(e);
                    return deferred.promise;
                }

                return {
                    _broadcast: broadcast,

                    _$log: $log,

                    /**
                     * Returns the files cache used by the loaders to store the files currently loading
                     * @returns {*}
                     */
                    _getFilesCache: function getFilesCache() {
                        return filesCache;
                    },

                    /**
                     * Let the service know that it should monitor angular.module because files are loading
                     * @param watch boolean
                     */
                    toggleWatch: function toggleWatch(watch) {
                        if (watch) {
                            recordDeclarations.push(true);
                        } else {
                            recordDeclarations.pop();
                        }
                    },

                    /**
                     * Let you get a module config object
                     * @param moduleName String the name of the module
                     * @returns {*}
                     */
                    getModuleConfig: function getModuleConfig(moduleName) {
                        if (!angular.isString(moduleName)) {
                            throw new Error('You need to give the name of the module to get');
                        }
                        if (!modules[moduleName]) {
                            return null;
                        }
                        return angular.copy(modules[moduleName]);
                    },

                    /**
                     * Let you define a module config object
                     * @param moduleConfig Object the module config object
                     * @returns {*}
                     */
                    setModuleConfig: function setModuleConfig(moduleConfig) {
                        if (!angular.isObject(moduleConfig)) {
                            throw new Error('You need to give the module config object to set');
                        }
                        modules[moduleConfig.name] = moduleConfig;
                        return moduleConfig;
                    },

                    /**
                     * Returns the list of loaded modules
                     * @returns {string[]}
                     */
                    getModules: function getModules() {
                        return regModules;
                    },

                    /**
                     * Let you check if a module has been loaded into Angular or not
                     * @param modulesNames String/Object a module name, or a list of module names
                     * @returns {boolean}
                     */
                    isLoaded: function isLoaded(modulesNames) {
                        var moduleLoaded = function moduleLoaded(module) {
                            var isLoaded = regModules.indexOf(module) > -1;
                            if (!isLoaded) {
                                isLoaded = !!moduleExists(module);
                            }
                            return isLoaded;
                        };
                        if (angular.isString(modulesNames)) {
                            modulesNames = [modulesNames];
                        }
                        if (angular.isArray(modulesNames)) {
                            var i, len;
                            for (i = 0, len = modulesNames.length; i < len; i++) {
                                if (!moduleLoaded(modulesNames[i])) {
                                    return false;
                                }
                            }
                            return true;
                        } else {
                            throw new Error('You need to define the module(s) name(s)');
                        }
                    },

                    /**
                     * Given a module, return its name
                     * @param module
                     * @returns {String}
                     */
                    _getModuleName: getModuleName,

                    /**
                     * Returns a module if it exists
                     * @param moduleName
                     * @returns {module}
                     */
                    _getModule: function getModule(moduleName) {
                        try {
                            return ngModuleFct(moduleName);
                        } catch (e) {
                            // this error message really suxx
                            if (/No module/.test(e) || e.message.indexOf('$injector:nomod') > -1) {
                                e.message = 'The module "' + stringify(moduleName) + '" that you are trying to load does not exist. ' + e.message;
                            }
                            throw e;
                        }
                    },

                    /**
                     * Check if a module exists and returns it if it does
                     * @param moduleName
                     * @returns {boolean}
                     */
                    moduleExists: moduleExists,

                    /**
                     * Load the dependencies, and might try to load new files depending on the config
                     * @param moduleName (String or Array of Strings)
                     * @param localParams
                     * @returns {*}
                     * @private
                     */
                    _loadDependencies: function _loadDependencies(moduleName, localParams) {
                        var loadedModule,
                            requires,
                            diff,
                            promisesList = [],
                            self = this;

                        moduleName = self._getModuleName(moduleName);

                        if (moduleName === null) {
                            return $q.when();
                        } else {
                            try {
                                loadedModule = self._getModule(moduleName);
                            } catch (e) {
                                return reject(e);
                            }
                            // get unloaded requires
                            requires = self.getRequires(loadedModule);
                        }

                        angular.forEach(requires, function (requireEntry) {
                            // If no configuration is provided, try and find one from a previous load.
                            // If there isn't one, bail and let the normal flow run
                            if (angular.isString(requireEntry)) {
                                var config = self.getModuleConfig(requireEntry);
                                if (config === null) {
                                    moduleCache.push(requireEntry); // We don't know about this module, but something else might, so push it anyway.
                                    return;
                                }
                                requireEntry = config;
                                // ignore the name because it's probably not a real module name
                                config.name = undefined;
                            }

                            // Check if this dependency has been loaded previously
                            if (self.moduleExists(requireEntry.name)) {
                                // compare against the already loaded module to see if the new definition adds any new files
                                diff = requireEntry.files.filter(function (n) {
                                    return self.getModuleConfig(requireEntry.name).files.indexOf(n) < 0;
                                });

                                // If the module was redefined, advise via the console
                                if (diff.length !== 0) {
                                    self._$log.warn('Module "', moduleName, '" attempted to redefine configuration for dependency. "', requireEntry.name, '"\n Additional Files Loaded:', diff);
                                }

                                // Push everything to the file loader, it will weed out the duplicates.
                                if (angular.isDefined(self.filesLoader)) {
                                    // if a files loader is defined
                                    promisesList.push(self.filesLoader(requireEntry, localParams).then(function () {
                                        return self._loadDependencies(requireEntry);
                                    }));
                                } else {
                                    return reject(new Error('Error: New dependencies need to be loaded from external files (' + requireEntry.files + '), but no loader has been defined.'));
                                }
                                return;
                            } else if (angular.isArray(requireEntry)) {
                                var files = [];
                                angular.forEach(requireEntry, function (entry) {
                                    // let's check if the entry is a file name or a config name
                                    var config = self.getModuleConfig(entry);
                                    if (config === null) {
                                        files.push(entry);
                                    } else if (config.files) {
                                        files = files.concat(config.files);
                                    }
                                });
                                if (files.length > 0) {
                                    requireEntry = {
                                        files: files
                                    };
                                }
                            } else if (angular.isObject(requireEntry)) {
                                if (requireEntry.hasOwnProperty('name') && requireEntry['name']) {
                                    // The dependency doesn't exist in the module cache and is a new configuration, so store and push it.
                                    self.setModuleConfig(requireEntry);
                                    moduleCache.push(requireEntry['name']);
                                }
                            }

                            // Check if the dependency has any files that need to be loaded. If there are, push a new promise to the promise list.
                            if (angular.isDefined(requireEntry.files) && requireEntry.files.length !== 0) {
                                if (angular.isDefined(self.filesLoader)) {
                                    // if a files loader is defined
                                    promisesList.push(self.filesLoader(requireEntry, localParams).then(function () {
                                        return self._loadDependencies(requireEntry);
                                    }));
                                } else {
                                    return reject(new Error('Error: the module "' + requireEntry.name + '" is defined in external files (' + requireEntry.files + '), but no loader has been defined.'));
                                }
                            }
                        });

                        // Create a wrapper promise to watch the promise list and resolve it once everything is done.
                        return $q.all(promisesList);
                    },

                    /**
                     * Inject new modules into Angular
                     * @param moduleName
                     * @param localParams
                     * @param real
                     */
                    inject: function inject(moduleName) {
                        var localParams = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                        var real = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

                        var self = this,
                            deferred = $q.defer();
                        if (angular.isDefined(moduleName) && moduleName !== null) {
                            if (angular.isArray(moduleName)) {
                                var promisesList = [];
                                angular.forEach(moduleName, function (module) {
                                    promisesList.push(self.inject(module, localParams, real));
                                });
                                return $q.all(promisesList);
                            } else {
                                self._addToLoadList(self._getModuleName(moduleName), true, real);
                            }
                        }
                        if (modulesToLoad.length > 0) {
                            var res = modulesToLoad.slice(); // clean copy
                            var loadNext = function loadNext(moduleName) {
                                moduleCache.push(moduleName);
                                modulePromises[moduleName] = deferred.promise;
                                self._loadDependencies(moduleName, localParams).then(function success() {
                                    try {
                                        justLoaded = [];
                                        _register(providers, moduleCache, localParams);
                                    } catch (e) {
                                        self._$log.error(e.message);
                                        deferred.reject(e);
                                        return;
                                    }

                                    if (modulesToLoad.length > 0) {
                                        loadNext(modulesToLoad.shift()); // load the next in list
                                    } else {
                                        deferred.resolve(res); // everything has been loaded, resolve
                                    }
                                }, function error(err) {
                                    deferred.reject(err);
                                });
                            };

                            // load the first in list
                            loadNext(modulesToLoad.shift());
                        } else if (localParams && localParams.name && modulePromises[localParams.name]) {
                            return modulePromises[localParams.name];
                        } else {
                            deferred.resolve();
                        }
                        return deferred.promise;
                    },

                    /**
                     * Get the list of required modules/services/... for this module
                     * @param module
                     * @returns {Array}
                     */
                    getRequires: function getRequires(module) {
                        var requires = [];
                        angular.forEach(module.requires, function (requireModule) {
                            if (regModules.indexOf(requireModule) === -1) {
                                requires.push(requireModule);
                            }
                        });
                        return requires;
                    },

                    /**
                     * Invoke the new modules & component by their providers
                     * @param providers
                     * @param queue
                     * @param moduleName
                     * @param reconfig
                     * @private
                     */
                    _invokeQueue: _invokeQueue,

                    /**
                     * Check if a module has been invoked and registers it if not
                     * @param args
                     * @param moduleName
                     * @returns {boolean} is new
                     */
                    _registerInvokeList: _registerInvokeList,

                    /**
                     * Register a new module and loads it, executing the run/config blocks if needed
                     * @param providers
                     * @param registerModules
                     * @param params
                     * @private
                     */
                    _register: _register,

                    /**
                     * Add a module name to the list of modules that will be loaded in the next inject
                     * @param name
                     * @param force
                     * @private
                     */
                    _addToLoadList: _addToLoadList,

                    /**
                     * Unregister modules (you shouldn't have to use this)
                     * @param modules
                     */
                    _unregister: function _unregister(modules) {
                        if (angular.isDefined(modules)) {
                            if (angular.isArray(modules)) {
                                angular.forEach(modules, function (module) {
                                    regInvokes[module] = undefined;
                                });
                            }
                        }
                    }
                };
            }];

            // Let's get the list of loaded modules & components
            this._init(angular.element(window.document));
        }]);

        var bootstrapFct = angular.bootstrap;
        angular.bootstrap = function (element, modules, config) {
            // Clean state from previous bootstrap
            regModules = ['ng', 'oc.lazyLoad'];
            regInvokes = {};
            regConfigs = [];
            modulesToLoad = [];
            realModules = [];
            recordDeclarations = [];
            broadcast = angular.noop;
            runBlocks = {};
            justLoaded = [];
            // we use slice to make a clean copy
            angular.forEach(modules.slice(), function (module) {
                _addToLoadList(module, true, true);
            });
            return bootstrapFct(element, modules, config);
        };

        var _addToLoadList = function _addToLoadList(name, force, real) {
            if ((recordDeclarations.length > 0 || force) && angular.isString(name) && modulesToLoad.indexOf(name) === -1) {
                modulesToLoad.push(name);
                if (real) {
                    realModules.push(name);
                }
            }
        };

        var ngModuleFct = angular.module;
        angular.module = function (name, requires, configFn) {
            _addToLoadList(name, false, true);
            return ngModuleFct(name, requires, configFn);
        };

        // CommonJS package manager support:
        if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
            module.exports = 'oc.lazyLoad';
        }
    })(angular, window);
    (function (angular) {
        'use strict';

        angular.module('oc.lazyLoad').directive('ocLazyLoad', ["$ocLazyLoad", "$compile", "$animate", "$parse", "$timeout", function ($ocLazyLoad, $compile, $animate, $parse, $timeout) {
            return {
                restrict: 'A',
                terminal: true,
                priority: 1000,
                compile: function compile(element, attrs) {
                    // we store the content and remove it before compilation
                    var content = element[0].innerHTML;
                    element.html('');

                    return function ($scope, $element, $attr) {
                        var model = $parse($attr.ocLazyLoad);
                        $scope.$watch(function () {
                            return model($scope) || $attr.ocLazyLoad; // it can be a module name (string), an object, an array, or a scope reference to any of this
                        }, function (moduleName) {
                            if (angular.isDefined(moduleName)) {
                                $ocLazyLoad.load(moduleName).then(function () {
                                    // Attach element contents to DOM and then compile them.
                                    // This prevents an issue where IE invalidates saved element objects (HTMLCollections)
                                    // of the compiled contents when attaching to the parent DOM.
                                    $animate.enter(content, $element);
                                    // get the new content & compile it
                                    $compile($element.contents())($scope);
                                });
                            }
                        }, true);
                    };
                }
            };
        }]);
    })(angular);
    (function (angular) {
        'use strict';

        angular.module('oc.lazyLoad').config(["$provide", function ($provide) {
            $provide.decorator('$ocLazyLoad', ["$delegate", "$q", "$window", "$interval", function ($delegate, $q, $window, $interval) {
                var uaCssChecked = false,
                    useCssLoadPatch = false,
                    anchor = $window.document.getElementsByTagName('head')[0] || $window.document.getElementsByTagName('body')[0];

                /**
                 * Load a js/css file
                 * @param type
                 * @param path
                 * @param params
                 * @returns promise
                 */
                $delegate.buildElement = function buildElement(type, path, params) {
                    var deferred = $q.defer(),
                        el,
                        loaded,
                        filesCache = $delegate._getFilesCache(),
                        cacheBuster = function cacheBuster(url) {
                        var dc = new Date().getTime();
                        if (url.indexOf('?') >= 0) {
                            if (url.substring(0, url.length - 1) === '&') {
                                return url + '_dc=' + dc;
                            }
                            return url + '&_dc=' + dc;
                        } else {
                            return url + '?_dc=' + dc;
                        }
                    };

                    // Store the promise early so the file load can be detected by other parallel lazy loads
                    // (ie: multiple routes on one page) a 'true' value isn't sufficient
                    // as it causes false positive load results.
                    if (angular.isUndefined(filesCache.get(path))) {
                        filesCache.put(path, deferred.promise);
                    }

                    // Switch in case more content types are added later
                    switch (type) {
                        case 'css':
                            el = $window.document.createElement('link');
                            el.type = 'text/css';
                            el.rel = 'stylesheet';
                            el.href = params.cache === false ? cacheBuster(path) : path;
                            break;
                        case 'js':
                            el = $window.document.createElement('script');
                            el.src = params.cache === false ? cacheBuster(path) : path;
                            break;
                        default:
                            filesCache.remove(path);
                            deferred.reject(new Error('Requested type "' + type + '" is not known. Could not inject "' + path + '"'));
                            break;
                    }
                    el.onload = el['onreadystatechange'] = function (e) {
                        if (el['readyState'] && !/^c|loade/.test(el['readyState']) || loaded) return;
                        el.onload = el['onreadystatechange'] = null;
                        loaded = 1;
                        $delegate._broadcast('ocLazyLoad.fileLoaded', path);
                        deferred.resolve(el);
                    };
                    el.onerror = function () {
                        filesCache.remove(path);
                        deferred.reject(new Error('Unable to load ' + path));
                    };
                    el.async = params.serie ? 0 : 1;

                    var insertBeforeElem = anchor.lastChild;
                    if (params.insertBefore) {
                        var element = angular.element(angular.isDefined(window.jQuery) ? params.insertBefore : document.querySelector(params.insertBefore));
                        if (element && element.length > 0) {
                            insertBeforeElem = element[0];
                        }
                    }
                    insertBeforeElem.parentNode.insertBefore(el, insertBeforeElem);

                    /*
                     The event load or readystatechange doesn't fire in:
                     - PhantomJS 1.9 (headless webkit browser)
                     - iOS < 6       (default mobile browser)
                     - Android < 4.4 (default mobile browser)
                     - Safari < 6    (desktop browser)
                     */
                    if (type == 'css') {
                        if (!uaCssChecked) {
                            var ua = $window.navigator.userAgent.toLowerCase();

                            if (ua.indexOf('phantomjs/1.9') > -1) {
                                // PhantomJS ~1.9
                                useCssLoadPatch = true;
                            } else if (/iP(hone|od|ad)/.test($window.navigator.platform)) {
                                // iOS < 6
                                var v = $window.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                                var iOSVersion = parseFloat([parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)].join('.'));
                                useCssLoadPatch = iOSVersion < 6;
                            } else if (ua.indexOf('android') > -1) {
                                // Android < 4.4
                                var androidVersion = parseFloat(ua.slice(ua.indexOf('android') + 8));
                                useCssLoadPatch = androidVersion < 4.4;
                            } else if (ua.indexOf('safari') > -1) {
                                // Safari < 6
                                var versionMatch = ua.match(/version\/([\.\d]+)/i);
                                useCssLoadPatch = versionMatch && versionMatch[1] && parseFloat(versionMatch[1]) < 6;
                            }
                        }

                        if (useCssLoadPatch) {
                            var tries = 1000; // * 20 = 20000 miliseconds
                            var interval = $interval(function () {
                                try {
                                    el.sheet.cssRules;
                                    $interval.cancel(interval);
                                    el.onload();
                                } catch (e) {
                                    if (--tries <= 0) {
                                        el.onerror();
                                    }
                                }
                            }, 20);
                        }
                    }

                    return deferred.promise;
                };

                return $delegate;
            }]);
        }]);
    })(angular);
    (function (angular) {
        'use strict';

        angular.module('oc.lazyLoad').config(["$provide", function ($provide) {
            $provide.decorator('$ocLazyLoad', ["$delegate", "$q", function ($delegate, $q) {
                /**
                 * The function that loads new files
                 * @param config
                 * @param params
                 * @returns {*}
                 */
                $delegate.filesLoader = function filesLoader(config) {
                    var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

                    var cssFiles = [],
                        templatesFiles = [],
                        jsFiles = [],
                        promises = [],
                        cachePromise = null,
                        filesCache = $delegate._getFilesCache();

                    $delegate.toggleWatch(true); // start watching angular.module calls

                    angular.extend(params, config);

                    var pushFile = function pushFile(path) {
                        var file_type = null,
                            m;
                        if (angular.isObject(path)) {
                            file_type = path.type;
                            path = path.path;
                        }
                        cachePromise = filesCache.get(path);
                        if (angular.isUndefined(cachePromise) || params.cache === false) {

                            // always check for requirejs syntax just in case
                            if ((m = /^(css|less|html|htm|js)?(?=!)/.exec(path)) !== null) {
                                // Detect file type using preceding type declaration (ala requireJS)
                                file_type = m[1];
                                path = path.substr(m[1].length + 1, path.length); // Strip the type from the path
                            }

                            if (!file_type) {
                                if ((m = /[.](css|less|html|htm|js)?((\?|#).*)?$/.exec(path)) !== null) {
                                    // Detect file type via file extension
                                    file_type = m[1];
                                } else if (!$delegate.jsLoader.hasOwnProperty('ocLazyLoadLoader') && $delegate.jsLoader.hasOwnProperty('requirejs')) {
                                    // requirejs
                                    file_type = 'js';
                                } else {
                                    $delegate._$log.error('File type could not be determined. ' + path);
                                    return;
                                }
                            }

                            if ((file_type === 'css' || file_type === 'less') && cssFiles.indexOf(path) === -1) {
                                cssFiles.push(path);
                            } else if ((file_type === 'html' || file_type === 'htm') && templatesFiles.indexOf(path) === -1) {
                                templatesFiles.push(path);
                            } else if (file_type === 'js' || jsFiles.indexOf(path) === -1) {
                                jsFiles.push(path);
                            } else {
                                $delegate._$log.error('File type is not valid. ' + path);
                            }
                        } else if (cachePromise) {
                            promises.push(cachePromise);
                        }
                    };

                    if (params.serie) {
                        pushFile(params.files.shift());
                    } else {
                        angular.forEach(params.files, function (path) {
                            pushFile(path);
                        });
                    }

                    if (cssFiles.length > 0) {
                        var cssDeferred = $q.defer();
                        $delegate.cssLoader(cssFiles, function (err) {
                            if (angular.isDefined(err) && $delegate.cssLoader.hasOwnProperty('ocLazyLoadLoader')) {
                                $delegate._$log.error(err);
                                cssDeferred.reject(err);
                            } else {
                                cssDeferred.resolve();
                            }
                        }, params);
                        promises.push(cssDeferred.promise);
                    }

                    if (templatesFiles.length > 0) {
                        var templatesDeferred = $q.defer();
                        $delegate.templatesLoader(templatesFiles, function (err) {
                            if (angular.isDefined(err) && $delegate.templatesLoader.hasOwnProperty('ocLazyLoadLoader')) {
                                $delegate._$log.error(err);
                                templatesDeferred.reject(err);
                            } else {
                                templatesDeferred.resolve();
                            }
                        }, params);
                        promises.push(templatesDeferred.promise);
                    }

                    if (jsFiles.length > 0) {
                        var jsDeferred = $q.defer();
                        $delegate.jsLoader(jsFiles, function (err) {
                            if (angular.isDefined(err) && ($delegate.jsLoader.hasOwnProperty("ocLazyLoadLoader") || $delegate.jsLoader.hasOwnProperty("requirejs"))) {
                                $delegate._$log.error(err);
                                jsDeferred.reject(err);
                            } else {
                                jsDeferred.resolve();
                            }
                        }, params);
                        promises.push(jsDeferred.promise);
                    }

                    if (promises.length === 0) {
                        var deferred = $q.defer(),
                            err = "Error: no file to load has been found, if you're trying to load an existing module you should use the 'inject' method instead of 'load'.";
                        $delegate._$log.error(err);
                        deferred.reject(err);
                        return deferred.promise;
                    } else if (params.serie && params.files.length > 0) {
                        return $q.all(promises).then(function () {
                            return $delegate.filesLoader(config, params);
                        });
                    } else {
                        return $q.all(promises)['finally'](function (res) {
                            $delegate.toggleWatch(false); // stop watching angular.module calls
                            return res;
                        });
                    }
                };

                /**
                 * Load a module or a list of modules into Angular
                 * @param module Mixed the name of a predefined module config object, or a module config object, or an array of either
                 * @param params Object optional parameters
                 * @returns promise
                 */
                $delegate.load = function (originalModule) {
                    var originalParams = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

                    var self = this,
                        config = null,
                        deferredList = [],
                        deferred = $q.defer(),
                        errText;

                    // clean copy
                    var module = angular.copy(originalModule);
                    var params = angular.copy(originalParams);

                    // If module is an array, break it down
                    if (angular.isArray(module)) {
                        // Resubmit each entry as a single module
                        angular.forEach(module, function (m) {
                            deferredList.push(self.load(m, params));
                        });

                        // Resolve the promise once everything has loaded
                        $q.all(deferredList).then(function (res) {
                            deferred.resolve(res);
                        }, function (err) {
                            deferred.reject(err);
                        });

                        return deferred.promise;
                    }

                    // Get or Set a configuration depending on what was passed in
                    if (angular.isString(module)) {
                        config = self.getModuleConfig(module);
                        if (!config) {
                            config = {
                                files: [module]
                            };
                        }
                    } else if (angular.isObject(module)) {
                        // case {type: 'js', path: lazyLoadUrl + 'testModule.fakejs'}
                        if (angular.isDefined(module.path) && angular.isDefined(module.type)) {
                            config = {
                                files: [module]
                            };
                        } else {
                            config = self.setModuleConfig(module);
                        }
                    }

                    if (config === null) {
                        var moduleName = self._getModuleName(module);
                        errText = 'Module "' + (moduleName || 'unknown') + '" is not configured, cannot load.';
                        $delegate._$log.error(errText);
                        deferred.reject(new Error(errText));
                        return deferred.promise;
                    } else {
                        // deprecated
                        if (angular.isDefined(config.template)) {
                            if (angular.isUndefined(config.files)) {
                                config.files = [];
                            }
                            if (angular.isString(config.template)) {
                                config.files.push(config.template);
                            } else if (angular.isArray(config.template)) {
                                config.files.concat(config.template);
                            }
                        }
                    }

                    var localParams = angular.extend({}, params, config);

                    // if someone used an external loader and called the load function with just the module name
                    if (angular.isUndefined(config.files) && angular.isDefined(config.name) && $delegate.moduleExists(config.name)) {
                        return $delegate.inject(config.name, localParams, true);
                    }

                    $delegate.filesLoader(config, localParams).then(function () {
                        $delegate.inject(null, localParams).then(function (res) {
                            deferred.resolve(res);
                        }, function (err) {
                            deferred.reject(err);
                        });
                    }, function (err) {
                        deferred.reject(err);
                    });

                    return deferred.promise;
                };

                // return the patched service
                return $delegate;
            }]);
        }]);
    })(angular);
    (function (angular) {
        'use strict';

        angular.module('oc.lazyLoad').config(["$provide", function ($provide) {
            $provide.decorator('$ocLazyLoad', ["$delegate", "$q", function ($delegate, $q) {
                /**
                 * cssLoader function
                 * @type Function
                 * @param paths array list of css files to load
                 * @param callback to call when everything is loaded. We use a callback and not a promise
                 * @param params object config parameters
                 * because the user can overwrite cssLoader and it will probably not use promises :(
                 */
                $delegate.cssLoader = function (paths, callback, params) {
                    var promises = [];
                    angular.forEach(paths, function (path) {
                        promises.push($delegate.buildElement('css', path, params));
                    });
                    $q.all(promises).then(function () {
                        callback();
                    }, function (err) {
                        callback(err);
                    });
                };
                $delegate.cssLoader.ocLazyLoadLoader = true;

                return $delegate;
            }]);
        }]);
    })(angular);
    (function (angular) {
        'use strict';

        angular.module('oc.lazyLoad').config(["$provide", function ($provide) {
            $provide.decorator('$ocLazyLoad', ["$delegate", "$q", function ($delegate, $q) {
                /**
                 * jsLoader function
                 * @type Function
                 * @param paths array list of js files to load
                 * @param callback to call when everything is loaded. We use a callback and not a promise
                 * @param params object config parameters
                 * because the user can overwrite jsLoader and it will probably not use promises :(
                 */
                $delegate.jsLoader = function (paths, callback, params) {
                    var promises = [];
                    angular.forEach(paths, function (path) {
                        promises.push($delegate.buildElement('js', path, params));
                    });
                    $q.all(promises).then(function () {
                        callback();
                    }, function (err) {
                        callback(err);
                    });
                };
                $delegate.jsLoader.ocLazyLoadLoader = true;

                return $delegate;
            }]);
        }]);
    })(angular);
    (function (angular) {
        'use strict';

        angular.module('oc.lazyLoad').config(["$provide", function ($provide) {
            $provide.decorator('$ocLazyLoad', ["$delegate", "$templateCache", "$q", "$http", function ($delegate, $templateCache, $q, $http) {
                /**
                 * templatesLoader function
                 * @type Function
                 * @param paths array list of css files to load
                 * @param callback to call when everything is loaded. We use a callback and not a promise
                 * @param params object config parameters for $http
                 * because the user can overwrite templatesLoader and it will probably not use promises :(
                 */
                $delegate.templatesLoader = function (paths, callback, params) {
                    var promises = [],
                        filesCache = $delegate._getFilesCache();

                    angular.forEach(paths, function (url) {
                        var deferred = $q.defer();
                        promises.push(deferred.promise);
                        $http.get(url, params).then(function (response) {
                            var data = response.data;
                            if (angular.isString(data) && data.length > 0) {
                                angular.forEach(angular.element(data), function (node) {
                                    if (node.nodeName === 'SCRIPT' && node.type === 'text/ng-template') {
                                        $templateCache.put(node.id, node.innerHTML);
                                    }
                                });
                            }
                            if (angular.isUndefined(filesCache.get(url))) {
                                filesCache.put(url, true);
                            }
                            deferred.resolve();
                        })['catch'](function (response) {
                            deferred.reject(new Error('Unable to load template file "' + url + '": ' + response.data));
                        });
                    });
                    return $q.all(promises).then(function () {
                        callback();
                    }, function (err) {
                        callback(err);
                    });
                };
                $delegate.templatesLoader.ocLazyLoadLoader = true;

                return $delegate;
            }]);
        }]);
    })(angular);
    // Array.indexOf polyfill for IE8
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (searchElement, fromIndex) {
            var k;

            // 1. Let O be the result of calling ToObject passing
            //    the this value as the argument.
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }

            var O = Object(this);

            // 2. Let lenValue be the result of calling the Get
            //    internal method of O with the argument "length".
            // 3. Let len be ToUint32(lenValue).
            var len = O.length >>> 0;

            // 4. If len is 0, return -1.
            if (len === 0) {
                return -1;
            }

            // 5. If argument fromIndex was passed let n be
            //    ToInteger(fromIndex); else let n be 0.
            var n = +fromIndex || 0;

            if (Math.abs(n) === Infinity) {
                n = 0;
            }

            // 6. If n >= len, return -1.
            if (n >= len) {
                return -1;
            }

            // 7. If n >= 0, then Let k be n.
            // 8. Else, n<0, Let k be len - abs(n).
            //    If k is less than 0, then let k be 0.
            k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

            // 9. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ToString(k).
                //   This is implicit for LHS operands of the in operator
                // b. Let kPresent be the result of calling the
                //    HasProperty internal method of O with argument Pk.
                //   This step can be combined with c
                // c. If kPresent is true, then
                //    i.  Let elementK be the result of calling the Get
                //        internal method of O with the argument ToString(k).
                //   ii.  Let same be the result of applying the
                //        Strict Equality Comparison Algorithm to
                //        searchElement and elementK.
                //  iii.  If same is true, return k.
                if (k in O && O[k] === searchElement) {
                    return k;
                }
                k++;
            }
            return -1;
        };
    }
});
$__System.registerDynamic("7", ["6"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("6");
});
$__System.register('8', ['4', '5', '7'], function (_export, _context) {
  "use strict";

  _export('default', function (angularModule, futureRoutes) {
    angularModule.requires.push('ui.router');
    angularModule.requires.push('ct.ui.router.extras.core');
    angularModule.requires.push('ct.ui.router.extras.future');
    angularModule.requires.push('oc.lazyLoad');

    var RouterConfig = ['$ocLazyLoadProvider', '$stateProvider', '$futureStateProvider', function ($ocLazyLoadProvider, $stateProvider, $futureStateProvider) {

      $futureStateProvider.stateFactory('load', ['$q', '$ocLazyLoad', 'futureState', function ($q, $ocLazyLoad, futureState) {

        var def = $q.defer();

        switch (futureState.moduleExport) {
          case 'module:name:constant':
            System.import(futureState.src).then(function (loaded) {
              $ocLazyLoad.load(angular.module(futureState.moduleExportName)).then(function () {
                def.resolve();
              }, function (err) {
                throw err;
              });
            });
          default:
            System.import(futureState.src).then(function (loaded) {
              var newModule = loaded;

              if (!loaded.name) {
                /**
                 * @desc They are an issue in original file, missing {window} and Object can't be accessed in component closure!
                 *  - mstanev fix!
                 */
                var key = window.Object.keys(loaded);
                newModule = loaded[key[0]];
              }

              $ocLazyLoad.load(newModule).then(function () {
                def.resolve();
              }, function (err) {
                throw err;
              });
            });
        }

        return def.promise;
      }]);

      futureRoutes.forEach(function (r) {
        $futureStateProvider.futureState(r);
      });
    }];

    return RouterConfig;
  });

  return {
    setters: [function (_) {}, function (_2) {}, function (_3) {}],
    execute: function () {}
  };
});
$__System.register('3', ['2', '8'], function (_export, _context) {
  "use strict";

  var angular, CoreModule, router, appLazyLoadRouterModule, futureRoutesCollection;
  return {
    setters: [function (_) {
      angular = _.angular;
      CoreModule = _.CoreModule;
    }, function (_2) {
      router = _2.default;
    }],
    execute: function () {
      _export('appLazyLoadRouterModule', appLazyLoadRouterModule = 'jspm.angular.lazyload-router');

      _export('futureRoutesCollection', futureRoutesCollection = []);

      angular.module(appLazyLoadRouterModule, [CoreModule]).config(router(angular.module(appLazyLoadRouterModule), futureRoutesCollection));

      _export('futureRoutesCollection', futureRoutesCollection);

      _export('appLazyLoadRouterModule', appLazyLoadRouterModule);
    }
  };
});
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define(["angular-core"], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory(require("angular-core"));
  else
    throw new Error("Module must be loaded as AMD or CommonJS");
});
//# sourceMappingURL=jspm.angular.lazyload-router.js.map