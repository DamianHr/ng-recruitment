function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header\">\n    <h1 class=\"mat-1\">{{ title }}</h1>\n</div>\n<app-search-bar\n        (searchChanged)=\"appCountries.onSearchUpdate($event)\"\n></app-search-bar>\n<app-countries #appCountries></app-countries>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/countries/countries.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/countries/countries.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCountriesCountriesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"data?.length > 0; else hint\">\n  <table\n    mat-table\n    [dataSource]=\"data\"\n    class=\"full-width-table mat-elevation-z1\"\n  >\n    <!-- Name Column -->\n    <ng-container cdkColumnDef=\"name\">\n      <th mat-header-cell *cdkHeaderCellDef>Name</th>\n      <td mat-cell *cdkCellDef=\"let element\">{{ element.name }}</td>\n    </ng-container>\n\n    <!-- Region Column -->\n    <ng-container cdkColumnDef=\"region\">\n      <th mat-header-cell *cdkHeaderCellDef>Region</th>\n      <td mat-cell *cdkCellDef=\"let element\">{{ element.region }}</td>\n    </ng-container>\n\n    <!-- Population Column -->\n    <ng-container cdkColumnDef=\"population\">\n      <th mat-header-cell *cdkHeaderCellDef>Population</th>\n      <td mat-cell *cdkCellDef=\"let element\">\n        {{ element.population | number }}\n      </td>\n    </ng-container>\n\n    <!-- Timezones alpha3Code -->\n    <ng-container cdkColumnDef=\"alpha3Code\">\n      <th mat-header-cell *cdkHeaderCellDef>Alpha3Code</th>\n      <td mat-cell *cdkCellDef=\"let element\">{{ element.alpha3Code }}</td>\n    </ng-container>\n\n    <tr mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *cdkRowDef=\"let row; columns: displayedColumns\"></tr>\n  </table>\n  <small class=\"counter\">{{ data?.length }} result(s)</small>\n</div>\n<ng-template #hint>\n  <div class=\"hint\">\n    <h1>\n      Click on <span class=\"material-icons\">search</span> to start a search\n    </h1>\n  </div>\n</ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/search-bar/search-bar.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-bar/search-bar.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSearchBarSearchBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar class=\"mat-elevation-z2\">\n  <mat-toolbar-row>\n    <img\n      class=\"toolbar-logo\"\n      src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Globe_font_awesome.svg/480px-Globe_font_awesome.svg.png\"\n      alt=\"globe\"\n    />\n    <span class=\"toolbar-spacer\"></span>\n    <form class=\"form-inline form-sm\" [formGroup]=\"formGroup\">\n      <mat-search-bar [formControl]=\"inputControl\"></mat-search-bar>\n    </form>\n  </mat-toolbar-row>\n</mat-toolbar>\n";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\n  padding: 16px 16px 1px;\n  background: #f07d00;\n}\n\nh1 {\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAxcHg7XG4gIGJhY2tncm91bmQ6IHJnYigyNDAsIDEyNSwgMCk7XG59XG5cbmgxIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'iREP - Country search';
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _countries_countries_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./countries/countries.component */
    "./src/app/countries/countries.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./search-bar/search-bar.component */
    "./src/app/search-bar/search-bar.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var ng_mat_search_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ng-mat-search-bar */
    "./node_modules/ng-mat-search-bar/__ivy_ngcc__/fesm2015/ng-mat-search-bar.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _countries_countries_component__WEBPACK_IMPORTED_MODULE_4__["CountriesComponent"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__["SearchBarComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_13__["CdkTableModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], ng_mat_search_bar__WEBPACK_IMPORTED_MODULE_17__["NgMatSearchBarModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/countries/countries.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/countries/countries.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCountriesCountriesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n\n.counter {\n  margin: 0 5px;\n}\n\n.hint {\n  display: flex;\n  justify-content: center;\n  margin-top: 80px;\n}\n\n.hint h1 {\n  font-size: 24px;\n  font-style: italic;\n  color: rgba(138, 138, 138, 0.85);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnRyaWVzL2NvdW50cmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvY291bnRyaWVzL2NvdW50cmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb3VudGVyIHtcbiAgbWFyZ2luOiAwIDVweDtcbn1cblxuLmhpbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgY29sb3I6IHJnYmEoMTM4LCAxMzgsIDEzOCwgMC44NSk7XG4gIH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/countries/countries.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/countries/countries.component.ts ***!
    \**************************************************/

  /*! exports provided: CountriesComponent */

  /***/
  function srcAppCountriesCountriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountriesComponent", function () {
      return CountriesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _countries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./countries.service */
    "./src/app/countries/countries.service.ts");

    var CountriesComponent = /*#__PURE__*/function () {
      function CountriesComponent(countriesService) {
        _classCallCheck(this, CountriesComponent);

        this.countriesService = countriesService;
        this.displayedColumns = ['name', 'region', 'population', 'alpha3Code'];
        this.data = [];
        this.destroyer = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(CountriesComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroyer.next();
          this.destroyer.unsubscribe();
        }
      }, {
        key: "onSearchUpdate",
        value: function onSearchUpdate(searchTerm) {
          var _this = this;

          this.getData(searchTerm).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyer)).subscribe(function (countries) {
            return _this.data = countries;
          });
        }
        /**
         *   !!! YOUR CHANGES START HERE !!!
         */

      }, {
        key: "getData",
        value: function getData(parameter) {
          return this.countriesService.getByParameter(parameter);
        }
        /**
         * Sorts given data based on provided property and order.
         * @param data The array of countries.
         * @param property The property to sort on.
         * @param ascending Defines the soring order.
         */

      }, {
        key: "sort",
        value: function sort(data, property) {
          var ascending = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          return undefined;
        }
        /**
         * Filters given data to keep only countries with a population higher or equal
         * to 20M people and a name starting with one of those letters ['b', 'g', 'l'].
         * @param data The array of countries.
         */

      }, {
        key: "filter",
        value: function filter(data) {
          return undefined;
        }
      }]);

      return CountriesComponent;
    }();

    CountriesComponent.ctorParameters = function () {
      return [{
        type: _countries_service__WEBPACK_IMPORTED_MODULE_5__["CountriesService"]
      }];
    };

    CountriesComponent.propDecorators = {
      table: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"]]
      }]
    };
    CountriesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-countries',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./countries.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/countries/countries.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./countries.component.scss */
      "./src/app/countries/countries.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_countries_service__WEBPACK_IMPORTED_MODULE_5__["CountriesService"]])], CountriesComponent);
    /***/
  },

  /***/
  "./src/app/countries/countries.service.ts":
  /*!************************************************!*\
    !*** ./src/app/countries/countries.service.ts ***!
    \************************************************/

  /*! exports provided: CountriesService */

  /***/
  function srcAppCountriesCountriesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountriesService", function () {
      return CountriesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /**
     * For more information refer to https://restcountries.eu/#api-endpoints-all
     */


    var ApiUrl = 'https://restcountries.eu/rest/v2/name';

    var CountriesService = /*#__PURE__*/function () {
      function CountriesService(http) {
        _classCallCheck(this, CountriesService);

        this.http = http;
      }

      _createClass(CountriesService, [{
        key: "getByParameter",
        value: function getByParameter(parameter) {
          return this.http.get("".concat(ApiUrl, "/").concat(parameter)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return Array.isArray(response) ? response : [response];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (array) {
            return Object.freeze(array);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
          }));
        }
      }]);

      return CountriesService;
    }();

    CountriesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CountriesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], CountriesService);
    /***/
  },

  /***/
  "./src/app/search-bar/search-bar.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/search-bar/search-bar.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSearchBarSearchBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-toolbar-row {\n  height: 100px;\n}\n.mat-toolbar-row mat-search-bar,\n.mat-toolbar-row mat-search-bar > .mat-search_icons > mat-icon {\n  width: 36px;\n  height: 36px;\n  font-size: 32px;\n}\n.toolbar-spacer {\n  flex: 1 1 auto;\n}\n.toolbar-logo {\n  display: inline;\n  width: 36px;\n  -webkit-animation: spin linear 10s infinite;\n          animation: spin linear 10s infinite;\n}\n@-webkit-keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGO0FBQUU7O0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBRUo7QUFFQTtFQUNFLGNBQUE7QUFDRjtBQUVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsdUJBQUE7RUFDRjtFQUNBO0lBQ0UseUJBQUE7RUFDRjtBQUNGO0FBUEE7RUFDRTtJQUNFLHVCQUFBO0VBQ0Y7RUFDQTtJQUNFLHlCQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdG9vbGJhci1yb3cge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXQtc2VhcmNoLWJhcixcbiAgbWF0LXNlYXJjaC1iYXIgPiAubWF0LXNlYXJjaF9pY29ucyA+IG1hdC1pY29uIHtcbiAgICB3aWR0aDogMzZweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICB9XG59XG5cbi50b29sYmFyLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4udG9vbGJhci1sb2dvIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aWR0aDogMzZweDtcbiAgYW5pbWF0aW9uOiBzcGluIGxpbmVhciAxMHMgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/search-bar/search-bar.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/search-bar/search-bar.component.ts ***!
    \****************************************************/

  /*! exports provided: SearchBarComponent */

  /***/
  function srcAppSearchBarSearchBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function () {
      return SearchBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SearchBarComponent = /*#__PURE__*/function () {
      function SearchBarComponent(formBuilder) {
        _classCallCheck(this, SearchBarComponent);

        this.formBuilder = formBuilder;
        this.inputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]);
        this.formGroup = this.formBuilder.group({
          search: this.inputControl
        });
        this.searchChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.destroyer = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(SearchBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.inputControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (value) {
            return _this2.searchChanged.emit(value);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyer)).subscribe();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroyer.next();
          this.destroyer.unsubscribe();
        }
      }]);

      return SearchBarComponent;
    }();

    SearchBarComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    SearchBarComponent.propDecorators = {
      searchChanged: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    SearchBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search-bar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./search-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/search-bar/search-bar.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./search-bar.component.scss */
      "./src/app/search-bar/search-bar.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], SearchBarComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.entry.ts":
  /*!***************************!*\
    !*** ./src/main.entry.ts ***!
    \***************************/

  /*! no exports provided */

  /***/
  function srcMainEntryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _main_entry_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./main.entry.ts */
    "./src/main.entry.ts"); // To run test uncomment the next line and comment main.entry.ts
    // import './test.browser.ts'

    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/damian/WebstormProjects/github-phvsk3-grpbff/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map