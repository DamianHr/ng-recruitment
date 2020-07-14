import jasmineRequire from 'jasmine-core/lib/jasmine-core/jasmine.js';
window.jasmineRequire = jasmineRequire;
import 'jasmine-core/lib/jasmine-core/jasmine-html.js';
import 'jasmine-core/lib/jasmine-core/boot.js';

declare var jasmine;

import './polyfills';

import 'zone.js/dist/zone-testing';

import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

// Import spec files here!
import './app/app.component.spec.ts';
import './app/search-bar/search-bar.component.spec.ts';
import './app/countries/countries.component.spec.ts';

bootstrap();

function bootstrap() {
  if (window.jasmineRef) {
    location.reload();
    return;
  } else {
    window.onload(undefined);
    window.jasmineRef = jasmine.getEnv();
  }

  // First, initialize the Angular testing environment.
  getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
}
