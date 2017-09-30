/**
 * Test Component description or something
 */
import {
  CtrlBase
} from 'milenstanev/mstanev.angular.1.x.x.core';
import template from './test.html!text';

export const TestComponent = {
  bindings: {},
  template,
  controller: class TestCtrl extends CtrlBase {
    testStr = `It works`;
  }
};
