"use strict";
const fs = require('fs');
const Builder = require('systemjs-builder');
const pjson = require('../package.json');

let builderConfigMeta = {
  /*'angular-core': {
    build: true,
  },*/
  'christopherthielen/ui-router-extras': {
    build: true,
  },
  'ocombe/ocLazyLoad': {
    build: true,
  },
};

for(let key in pjson.jspm.dependencies) {
  if(!builderConfigMeta.hasOwnProperty(key)) {
    builderConfigMeta[key] = {
      build: false
    };
  }
}

/**
 * Define baseUrl
 * . -> build, run as npm script file
 * .. -> debug, run as node file
 * @type {string}
 */
const baseUrl = '.';
/**
 * Configure builder paths
 */
const builder = new Builder(`${baseUrl}/`, `${baseUrl}/${pjson.jspm.configFile}`);

builder.config({
  meta: builderConfigMeta,
  defaultJSExtensions: true,
  transpiler: "plugin-babel",
  babelOptions: {
    presets: ['babel-preset-es2017'],
    plugins: ['babel-plugin-transform-decorators-legacy']
  },
  map: {
    "systemjs-babel-build": "npm:systemjs-plugin-babel@0.0.25/systemjs-babel-browser.js"
  }
});

builder
  .buildStatic(
    `${baseUrl}/src/index.js`,
    `${baseUrl}/${pjson.main}.js`,
    {
      inject: true,
      minify: true,
      mangle: true,
      sourceMaps: true,
      format: 'umd'
    }
  ).then(function() {
  console.log('Build complete\n');
})
  .catch(function(err) {
    console.log('Build error\n');
    console.log(err);
  });

builder
  .buildStatic(
    `${baseUrl}/src/test-module.js`,
    `${baseUrl}/src/test-module.bundle.js`,
    {
      inject: true,
      minify: true,
      mangle: false,
      sourceMaps: true,
      format: 'umd'
    }
  ).then(function() {
    console.log('Build test component complete\n');
  })
  .catch(function(err) {
    console.log('Build test component error\n');
    console.log(err);
  });
