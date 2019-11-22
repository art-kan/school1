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
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  background: url('admin-bg.jpg') no-repeat center / cover;\n}\n\n.form-login {\n  padding: 10px 20px;\n  min-height: 300px;\n  max-width: 600px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  border: 2px solid #000;\n  border-radius: 15px;\n  background-color: rgba(255,255,255,0.8);\n  box-shadow: 0 0 10px 0 #fff;\n  font-size: 20px;\n}\n\n.form-login input {\n  padding: 5px 10px;\n  background: #fff;\n  border: 1px solid #ccc;\n}\n\n.form-login input.invalid {\n  border-color: red;\n}\n\n.form-login input:focus {\n  outline: 0;\n  box-shadow: 0 0 5px 0 #000;\n}\n\n.submitHint {\n  font-style: italic;\n  font-size: 16px;\n  margin-top: 2em;\n}\n\n@media screen and (max-width: 560px) {\n  .form-login {\n    text-align: center;\n    max-width: 80%;\n  }\n\n  .form-login input {\n    width: 100%;\n    margin-top: 1em;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW5zY3JlZW4vbG9naW5ib3gvbG9naW5ib3guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHdEQUFzRTtBQUN4RTs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1Q0FBdUM7RUFDdkMsMkJBQTJCO0VBQzNCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDViwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luc2NyZWVuL2xvZ2luYm94L2xvZ2luYm94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvYWRtaW4tYmcuanBnKSBuby1yZXBlYXQgY2VudGVyIC8gY292ZXI7XG59XG5cbi5mb3JtLWxvZ2luIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAwICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmZvcm0tbG9naW4gaW5wdXQge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLmZvcm0tbG9naW4gaW5wdXQuaW52YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogcmVkO1xufVxuXG4uZm9ybS1sb2dpbiBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggMCAjMDAwO1xufVxuXG4uc3VibWl0SGludCB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5mb3JtLWxvZ2luIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gIH1cblxuICAuZm9ybS1sb2dpbiBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICB9XG59XG4iXX0= */");

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