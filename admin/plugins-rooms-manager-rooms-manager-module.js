(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["plugins-rooms-manager-rooms-manager-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/plugins/rooms-manager/rooms-editing/rooms-editing.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/plugins/rooms-manager/rooms-editing/rooms-editing.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <p>This feature is not implemented yet</p>\n</div>");

/***/ }),

/***/ "./src/app/plugins/rooms-manager/rooms-editing/rooms-editing.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/plugins/rooms-manager/rooms-editing/rooms-editing.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9yb29tcy1tYW5hZ2VyL3Jvb21zLWVkaXRpbmcvcm9vbXMtZWRpdGluZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/plugins/rooms-manager/rooms-editing/rooms-editing.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/plugins/rooms-manager/rooms-editing/rooms-editing.component.ts ***!
  \********************************************************************************/
/*! exports provided: RoomsEditingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomsEditingComponent", function() { return RoomsEditingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RoomsEditingComponent = class RoomsEditingComponent {
    constructor() { }
    ngOnInit() {
    }
};
RoomsEditingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rooms-editing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rooms-editing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/plugins/rooms-manager/rooms-editing/rooms-editing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rooms-editing.component.css */ "./src/app/plugins/rooms-manager/rooms-editing/rooms-editing.component.css")).default]
    })
], RoomsEditingComponent);



/***/ }),

/***/ "./src/app/plugins/rooms-manager/rooms-manager-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/plugins/rooms-manager/rooms-manager-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: RoomsManagerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomsManagerRoutingModule", function() { return RoomsManagerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _rooms_editing_rooms_editing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rooms-editing/rooms-editing.component */ "./src/app/plugins/rooms-manager/rooms-editing/rooms-editing.component.ts");




const routes = [
    { path: '**', component: _rooms_editing_rooms_editing_component__WEBPACK_IMPORTED_MODULE_3__["RoomsEditingComponent"] },
];
let RoomsManagerRoutingModule = class RoomsManagerRoutingModule {
};
RoomsManagerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RoomsManagerRoutingModule);



/***/ }),

/***/ "./src/app/plugins/rooms-manager/rooms-manager.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/plugins/rooms-manager/rooms-manager.module.ts ***!
  \***************************************************************/
/*! exports provided: RoomsManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomsManagerModule", function() { return RoomsManagerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _rooms_manager_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rooms-manager-routing.module */ "./src/app/plugins/rooms-manager/rooms-manager-routing.module.ts");
/* harmony import */ var _rooms_editing_rooms_editing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rooms-editing/rooms-editing.component */ "./src/app/plugins/rooms-manager/rooms-editing/rooms-editing.component.ts");





let RoomsManagerModule = class RoomsManagerModule {
};
RoomsManagerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_rooms_editing_rooms_editing_component__WEBPACK_IMPORTED_MODULE_4__["RoomsEditingComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _rooms_manager_routing_module__WEBPACK_IMPORTED_MODULE_3__["RoomsManagerRoutingModule"]
        ]
    })
], RoomsManagerModule);



/***/ })

}]);
//# sourceMappingURL=plugins-rooms-manager-rooms-manager-module.js.map