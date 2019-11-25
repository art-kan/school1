(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-core-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/layout.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/layout.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\" *ngIf=\"allowView\">\n  <div class=\"topbar\">\n    <div class=\"greating-box\">\n      Verity Way | <span>Панель Администратора</span>\n    </div>\n    <div class=\"link-back\">\n      <a [href]=\"originHref\">Покинуть</a>\n    </div>\n  </div>\n  <div class=\"content\">\n    <div class=\"sidebar-wrapper\">\n      <app-navbar class=\"sidebar\"></app-navbar>\n    </div>\n    <div class=\"plugin-window\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/navbar/navbar.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/navbar/navbar.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar\">\n  <ul class=\"navbar-list\">\n    <li *ngFor=\"let item of menu\" class=\"navbar-item\">\n      <a [routerLink]=\"[ '/', item.path]\">\n        {{ item.title }}\n      </a>\n    </li>\n  </ul>\n</nav>\n");

/***/ }),

/***/ "./src/app/config.ts":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: defaultPluginPath, plugins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPluginPath", function() { return defaultPluginPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugins", function() { return plugins; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// Configuration file
// ALPHA version

const defaultPluginPath = 'posts';
const plugins = [
    {
        name: 'posts-manager',
        title: 'Посты',
        path: 'posts',
    },
    {
        name: 'contacts-manager',
        title: 'Контакты',
        path: 'contacts',
    },
    {
        name: 'text-manager',
        title: 'Тексты',
        path: 'texts',
    },
    {
        name: 'rooms-manager',
        title: 'Помещения',
        path: 'rooms',
    }
];


/***/ }),

/***/ "./src/app/core/core-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/core/core-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CoreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreRoutingModule", function() { return CoreRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/core/layout/layout.component.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");





const routes = [
    {
        path: '', component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            {
                path: '', pathMatch: 'full', redirectTo: _config__WEBPACK_IMPORTED_MODULE_4__["defaultPluginPath"],
            },
            {
                path: 'login',
                loadChildren: () => __webpack_require__.e(/*! import() | loginscreen-loginscreen-module */ "loginscreen-loginscreen-module").then(__webpack_require__.bind(null, /*! ../loginscreen/loginscreen.module */ "./src/app/loginscreen/loginscreen.module.ts"))
                    .then(mod => mod.LoginscreenModule),
            },
            {
                path: 'posts',
                loadChildren: () => Promise.all(/*! import() | plugins-posts-manager-posts-manager-module */[__webpack_require__.e("default~plugins-contacts-manager-contacts-manager-module~plugins-posts-manager-posts-manager-module~~9bbccd02"), __webpack_require__.e("plugins-posts-manager-posts-manager-module")]).then(__webpack_require__.bind(null, /*! ../plugins/posts-manager/posts-manager.module */ "./src/app/plugins/posts-manager/posts-manager.module.ts"))
                    .then(mod => mod.PostsManagerModule),
            },
            {
                path: 'contacts',
                loadChildren: () => Promise.all(/*! import() | plugins-contacts-manager-contacts-manager-module */[__webpack_require__.e("default~plugins-contacts-manager-contacts-manager-module~plugins-posts-manager-posts-manager-module~~9bbccd02"), __webpack_require__.e("plugins-contacts-manager-contacts-manager-module")]).then(__webpack_require__.bind(null, /*! ../plugins/contacts-manager/contacts-manager.module */ "./src/app/plugins/contacts-manager/contacts-manager.module.ts"))
                    .then(mod => mod.ContactsManagerModule),
            },
            {
                path: 'texts',
                loadChildren: () => Promise.all(/*! import() | plugins-texts-manager-texts-manager-module */[__webpack_require__.e("default~plugins-contacts-manager-contacts-manager-module~plugins-posts-manager-posts-manager-module~~9bbccd02"), __webpack_require__.e("plugins-texts-manager-texts-manager-module")]).then(__webpack_require__.bind(null, /*! ../plugins/texts-manager/texts-manager.module */ "./src/app/plugins/texts-manager/texts-manager.module.ts"))
                    .then(mod => mod.TextsManagerModule),
            },
            {
                path: 'rooms',
                loadChildren: () => __webpack_require__.e(/*! import() | plugins-rooms-manager-rooms-manager-module */ "plugins-rooms-manager-rooms-manager-module").then(__webpack_require__.bind(null, /*! ../plugins/rooms-manager/rooms-manager.module */ "./src/app/plugins/rooms-manager/rooms-manager.module.ts"))
                    .then(mod => mod.RoomsManagerModule),
            }
        ]
    }
];
let CoreRoutingModule = class CoreRoutingModule {
};
CoreRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CoreRoutingModule);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core-routing.module */ "./src/app/core/core-routing.module.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/core/layout/layout.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/core/navbar/navbar.component.ts");






let CoreModule = class CoreModule {
    constructor() {
    }
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _core_routing_module__WEBPACK_IMPORTED_MODULE_3__["CoreRoutingModule"]
        ],
        exports: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"]],
    })
], CoreModule);



/***/ }),

/***/ "./src/app/core/layout/layout.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/layout/layout.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.topbar {\n  background: #000;\n  color: #fff;\n  padding: 7px 15px;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  z-index: 2;\n}\n\n.content {\n  display: flex;\n  flex: 1 1;\n}\n\n.content > *:first-child,\n.sidebar {\n  min-width: 200px;\n  max-width: 300px;\n}\n\n.plugin-window {\n  flex: 1 1;\n  padding: 15px;\n  background: #e6e6e6;\n}\n\n.sidebar {\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  bottom: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvcmUvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsT0FBTztFQUNQLE1BQU07RUFDTixTQUFTO0FBQ1giLCJmaWxlIjoiLi4vLi4vY29yZS9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRvcGJhciB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA3cHggMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMSAxO1xufVxuXG4uY29udGVudCA+ICo6Zmlyc3QtY2hpbGQsXG4uc2lkZWJhciB7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIG1heC13aWR0aDogMzAwcHg7XG59XG5cbi5wbHVnaW4td2luZG93IHtcbiAgZmxleDogMSAxO1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xufVxuXG4uc2lkZWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/core/layout/layout.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/layout/layout.component.ts ***!
  \*************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LayoutComponent = class LayoutComponent {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
        this.allowView = false;
        this.originHref = location.origin;
        auth.isAdmin()
            .subscribe((res) => {
            if (!res['ok']) {
                router.navigate(['/login']);
                this.allowView = false;
            }
            else {
                this.allowView = true;
            }
        });
    }
    ngOnInit() {
    }
};
LayoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layout.component.css */ "./src/app/core/layout/layout.component.css")).default]
    })
], LayoutComponent);



/***/ }),

/***/ "./src/app/core/navbar/navbar.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar {\n  background: #B1ADAD;\n  height: 100%;\n  padding: 30px 5px 5px;\n}\n\n.navbar-item {\n  border-bottom: 2px solid #000;\n  padding-top: 15px;\n  padding-bottom: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvcmUvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiIuLi8uLi9jb3JlL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kOiAjQjFBREFEO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDMwcHggNXB4IDVweDtcbn1cblxuLm5hdmJhci1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/core/navbar/navbar.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.ts ***!
  \*************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");



let NavbarComponent = class NavbarComponent {
    constructor() {
        this.menu = [];
    }
    ngOnInit() {
        this.menu.push(..._config__WEBPACK_IMPORTED_MODULE_2__["plugins"]);
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/core/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ })

}]);
//# sourceMappingURL=core-core-module.js.map