(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["plugins-gallery-manager-gallery-manager-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/plugins/gallery-manager/gallery-dashboard/gallery-dashboard.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/plugins/gallery-manager/gallery-dashboard/gallery-dashboard.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"toolbar\">\n    <div class=\"controlbox\">\n      <button class=\"btn-control\" id=\"remove\">\n        <img src=\"assets/trash.svg\" alt=\"remove\">\n      </button>\n      <button class=\"btn-control\" id=\"edit\">\n        <img src=\"assets/pencil.svg\" alt=\"edit\">\n      </button>\n      <button class=\"btn-control\" id=\"add\">\n        <img src=\"assets/plus.svg\" alt=\"add\">\n      </button>\n    </div>\n    <div class=\"searchbox\">\n      <div class=\"category-filter\">\n        <select id=\"category-filter-select\">\n          <option value=\"simple\">simple</option>\n          <option value=\"hard-thinking\">hard-thinking</option>\n        </select>\n      </div>\n      <div class=\"text-filter\">\n        <input type=\"text\" id=\"text-filter\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"photos\">\n    <div class=\"photo-box\">\n      <img src=\"https://picsum.photos/700/400\">\n      <div class=\"tools\">\n        <div class=\"selecting\"></div>\n        <div class=\"remove\"></div>\n        <div class=\"edit-data\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- <gallery-photo-data-editor></gallery-photo-data-editor> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/plugins/gallery-manager/photo-data-editor/photo-data-editor.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/plugins/gallery-manager/photo-data-editor/photo-data-editor.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>photo-data-editor works!</p>\n");

/***/ }),

/***/ "./src/app/plugins/gallery-manager/gallery-dashboard/gallery-dashboard.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/plugins/gallery-manager/gallery-dashboard/gallery-dashboard.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  border-bottom: 3px solid #3E3E3E;\n  padding-bottom: 18px;\n}\n\n.btn-control {\n  height: 90px;\n  background: none;\n  border: 1px solid #dadce0;\n  -webkit-filter: invert(24%) sepia(8%) saturate(378%) hue-rotate(163deg) brightness(94%) contrast(92%);\n          filter: invert(24%) sepia(8%) saturate(378%) hue-rotate(163deg) brightness(94%) contrast(92%);\n  margin: 0 12px;\n  padding: 10px;\n}\n\n.searchbox {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.category-filter,\n.text-filter {\n  height: 40px;\n}\n\n.category-filter > select,\n.text-filter > input {\n  height: 100%;\n}\n\n.category-filter > select {\n  width: 200px;\n  background: rgba(255, 255, 255, 0.38);\n  padding: 0 10px;\n}\n\n.text-filter > input {\n  padding: 0 10px;\n}\n\n.searchbox > :last-child {\n  margin-left: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnktZGFzaGJvYXJkL2dhbGxlcnktZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLGdDQUFnQztFQUNoQyxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixxR0FBNkY7VUFBN0YsNkZBQTZGO0VBQzdGLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUNBQXFDO0VBQ3JDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImdhbGxlcnktZGFzaGJvYXJkL2dhbGxlcnktZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMzRTNFM0U7XG4gIHBhZGRpbmctYm90dG9tOiAxOHB4O1xufVxuXG4uYnRuLWNvbnRyb2wge1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYWRjZTA7XG4gIGZpbHRlcjogaW52ZXJ0KDI0JSkgc2VwaWEoOCUpIHNhdHVyYXRlKDM3OCUpIGh1ZS1yb3RhdGUoMTYzZGVnKSBicmlnaHRuZXNzKDk0JSkgY29udHJhc3QoOTIlKTtcbiAgbWFyZ2luOiAwIDEycHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zZWFyY2hib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2F0ZWdvcnktZmlsdGVyLFxuLnRleHQtZmlsdGVyIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uY2F0ZWdvcnktZmlsdGVyID4gc2VsZWN0LFxuLnRleHQtZmlsdGVyID4gaW5wdXQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jYXRlZ29yeS1maWx0ZXIgPiBzZWxlY3Qge1xuICB3aWR0aDogMjAwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zOCk7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLnRleHQtZmlsdGVyID4gaW5wdXQge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi5zZWFyY2hib3ggPiA6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/plugins/gallery-manager/gallery-dashboard/gallery-dashboard.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/plugins/gallery-manager/gallery-dashboard/gallery-dashboard.component.ts ***!
  \******************************************************************************************/
/*! exports provided: GalleryDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryDashboardComponent", function() { return GalleryDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GalleryDashboardComponent = class GalleryDashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
GalleryDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gallery-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gallery-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/plugins/gallery-manager/gallery-dashboard/gallery-dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gallery-dashboard.component.css */ "./src/app/plugins/gallery-manager/gallery-dashboard/gallery-dashboard.component.css")).default]
    })
], GalleryDashboardComponent);



/***/ }),

/***/ "./src/app/plugins/gallery-manager/gallery-manager-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/plugins/gallery-manager/gallery-manager-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: GalleryManagerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryManagerRoutingModule", function() { return GalleryManagerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _gallery_dashboard_gallery_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery-dashboard/gallery-dashboard.component */ "./src/app/plugins/gallery-manager/gallery-dashboard/gallery-dashboard.component.ts");




const routes = [
    {
        path: 'dashboard', component: _gallery_dashboard_gallery_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["GalleryDashboardComponent"],
    },
    {
        path: '', pathMatch: 'full', redirectTo: 'dashboard',
    },
];
let GalleryManagerRoutingModule = class GalleryManagerRoutingModule {
};
GalleryManagerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], GalleryManagerRoutingModule);



/***/ }),

/***/ "./src/app/plugins/gallery-manager/gallery-manager.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/plugins/gallery-manager/gallery-manager.module.ts ***!
  \*******************************************************************/
/*! exports provided: GalleryManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryManagerModule", function() { return GalleryManagerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _gallery_manager_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery-manager-routing.module */ "./src/app/plugins/gallery-manager/gallery-manager-routing.module.ts");
/* harmony import */ var _gallery_dashboard_gallery_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery-dashboard/gallery-dashboard.component */ "./src/app/plugins/gallery-manager/gallery-dashboard/gallery-dashboard.component.ts");
/* harmony import */ var _photo_data_editor_photo_data_editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./photo-data-editor/photo-data-editor.component */ "./src/app/plugins/gallery-manager/photo-data-editor/photo-data-editor.component.ts");






let GalleryManagerModule = class GalleryManagerModule {
};
GalleryManagerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_gallery_dashboard_gallery_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["GalleryDashboardComponent"], _photo_data_editor_photo_data_editor_component__WEBPACK_IMPORTED_MODULE_5__["PhotoDataEditorComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _gallery_manager_routing_module__WEBPACK_IMPORTED_MODULE_3__["GalleryManagerRoutingModule"]
        ]
    })
], GalleryManagerModule);



/***/ }),

/***/ "./src/app/plugins/gallery-manager/photo-data-editor/photo-data-editor.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/plugins/gallery-manager/photo-data-editor/photo-data-editor.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaG90by1kYXRhLWVkaXRvci9waG90by1kYXRhLWVkaXRvci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/plugins/gallery-manager/photo-data-editor/photo-data-editor.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/plugins/gallery-manager/photo-data-editor/photo-data-editor.component.ts ***!
  \******************************************************************************************/
/*! exports provided: PhotoDataEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoDataEditorComponent", function() { return PhotoDataEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PhotoDataEditorComponent = class PhotoDataEditorComponent {
    constructor() { }
    ngOnInit() {
    }
};
PhotoDataEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'gallery-photo-data-editor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./photo-data-editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/plugins/gallery-manager/photo-data-editor/photo-data-editor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./photo-data-editor.component.css */ "./src/app/plugins/gallery-manager/photo-data-editor/photo-data-editor.component.css")).default]
    })
], PhotoDataEditorComponent);



/***/ })

}]);
//# sourceMappingURL=plugins-gallery-manager-gallery-manager-module.js.map