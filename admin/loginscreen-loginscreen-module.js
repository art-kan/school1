(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loginscreen-loginscreen-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loginscreen/loginbox/loginbox.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loginscreen/loginbox/loginbox.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <form class=\"form-login\">\n    <p>\n      My password is: <input type=\"password\" name=\"password\" #inputpwd autofocus>\n    </p>\n    <p class=\"submitHint\">(Press [Enter] to say)</p>\n    <input type=\"submit\" hidden (click)=\"submit($event, inputpwd)\">\n  </form>\n</div>\n");

/***/ }),

/***/ "./src/app/loginscreen/loginbox/loginbox.component.css":
/*!*************************************************************!*\
  !*** ./src/app/loginscreen/loginbox/loginbox.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  background: url('admin-bg.jpg') no-repeat center / cover;\n}\n\n.form-login {\n  padding: 10px 20px;\n  min-height: 300px;\n  max-width: 600px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  border: 2px solid #000;\n  border-radius: 15px;\n  background-color: rgba(255,255,255,0.8);\n  box-shadow: 0 0 10px 0 #fff;\n  font-size: 20px;\n}\n\n.form-login input {\n  padding: 5px 10px;\n  background: #fff;\n  border: 1px solid #ccc;\n}\n\n.form-login input.invalid {\n  border-color: red;\n}\n\n.form-login input:focus {\n  outline: 0;\n  box-shadow: 0 0 5px 0 #000;\n}\n\n.submitHint {\n  font-style: italic;\n  font-size: 16px;\n  margin-top: 2em;\n}\n\n@media screen and (max-width: 560px) {\n  .form-login {\n    text-align: center;\n    max-width: 80%;\n  }\n\n  .form-login input {\n    width: 100%;\n    margin-top: 1em;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xvZ2luc2NyZWVuL2xvZ2luYm94L2xvZ2luYm94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix3REFBc0U7QUFDeEU7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUNBQXVDO0VBQ3ZDLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoiLi4vLi4vbG9naW5zY3JlZW4vbG9naW5ib3gvbG9naW5ib3guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9hZG1pbi1iZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgLyBjb3Zlcjtcbn1cblxuLmZvcm0tbG9naW4ge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgI2ZmZjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uZm9ybS1sb2dpbiBpbnB1dCB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uZm9ybS1sb2dpbiBpbnB1dC5pbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG59XG5cbi5mb3JtLWxvZ2luIGlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDVweCAwICMwMDA7XG59XG5cbi5zdWJtaXRIaW50IHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpIHtcbiAgLmZvcm0tbG9naW4ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5mb3JtLWxvZ2luIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/loginscreen/loginbox/loginbox.component.ts":
/*!************************************************************!*\
  !*** ./src/app/loginscreen/loginbox/loginbox.component.ts ***!
  \************************************************************/
/*! exports provided: LoginboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginboxComponent", function() { return LoginboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginboxComponent = class LoginboxComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
    }
    submit(e, input) {
        e.preventDefault();
        const password = input.value;
        this.auth.checkAdmin(password)
            .subscribe((response) => {
            if (response['ok']) {
                this.auth.setKey(response['key']);
                this.router.navigate(['/']);
            }
            else {
                input.value = '';
                input.classList.add('invalid');
                input.focus();
            }
        });
    }
};
LoginboxComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loginbox',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loginbox.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loginscreen/loginbox/loginbox.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loginbox.component.css */ "./src/app/loginscreen/loginbox/loginbox.component.css")).default]
    })
], LoginboxComponent);



/***/ }),

/***/ "./src/app/loginscreen/loginscreen-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/loginscreen/loginscreen-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: LoginscreenRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginscreenRoutingModule", function() { return LoginscreenRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _loginbox_loginbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loginbox/loginbox.component */ "./src/app/loginscreen/loginbox/loginbox.component.ts");




const routes = [
    { path: '', component: _loginbox_loginbox_component__WEBPACK_IMPORTED_MODULE_3__["LoginboxComponent"] },
];
let LoginscreenRoutingModule = class LoginscreenRoutingModule {
};
LoginscreenRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoginscreenRoutingModule);



/***/ }),

/***/ "./src/app/loginscreen/loginscreen.module.ts":
/*!***************************************************!*\
  !*** ./src/app/loginscreen/loginscreen.module.ts ***!
  \***************************************************/
/*! exports provided: LoginscreenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginscreenModule", function() { return LoginscreenModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _loginscreen_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loginscreen-routing.module */ "./src/app/loginscreen/loginscreen-routing.module.ts");
/* harmony import */ var _loginbox_loginbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loginbox/loginbox.component */ "./src/app/loginscreen/loginbox/loginbox.component.ts");





let LoginscreenModule = class LoginscreenModule {
};
LoginscreenModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_loginbox_loginbox_component__WEBPACK_IMPORTED_MODULE_4__["LoginboxComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _loginscreen_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginscreenRoutingModule"]
        ],
        exports: [_loginbox_loginbox_component__WEBPACK_IMPORTED_MODULE_4__["LoginboxComponent"]]
    })
], LoginscreenModule);



/***/ })

}]);
//# sourceMappingURL=loginscreen-loginscreen-module.js.map