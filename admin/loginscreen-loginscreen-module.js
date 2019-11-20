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
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  background: url('admin-bg.jpg') no-repeat center / cover;\n}\n\n.form-login {\n  padding: 10px 20px;\n  min-height: 300px;\n  max-width: 600px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  border: 2px solid #000;\n  border-radius: 15px;\n  background-color: rgba(255,255,255,0.8);\n  box-shadow: 0 0 10px 0 #fff;\n  font-size: 20px;\n}\n\n.form-login input {\n  padding: 5px 10px;\n  background: #fff;\n  border: 1px solid #ccc;\n}\n\n.form-login input.invalid {\n  border-color: red;\n}\n\n.form-login input:focus {\n  outline: 0;\n  box-shadow: 0 0 5px 0 #000;\n}\n\n.submitHint {\n  font-style: italic;\n  font-size: 16px;\n  margin-top: 2em;\n}\n\n@media screen and (max-width: 560px) {\n  .form-login {\n    text-align: center;\n    max-width: 80%;\n  }\n\n  .form-login input {\n    width: 100%;\n    margin-top: 1em;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sb2dpbnNjcmVlbi9sb2dpbmJveC9sb2dpbmJveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isd0RBQXNFO0FBQ3hFOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2QywyQkFBMkI7RUFDM0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6ImFwcC9sb2dpbnNjcmVlbi9sb2dpbmJveC9sb2dpbmJveC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2FkbWluLWJnLmpwZykgbm8tcmVwZWF0IGNlbnRlciAvIGNvdmVyO1xufVxuXG4uZm9ybS1sb2dpbiB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMCAjZmZmO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5mb3JtLWxvZ2luIGlucHV0IHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5mb3JtLWxvZ2luIGlucHV0LmludmFsaWQge1xuICBib3JkZXItY29sb3I6IHJlZDtcbn1cblxuLmZvcm0tbG9naW4gaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgNXB4IDAgIzAwMDtcbn1cblxuLnN1Ym1pdEhpbnQge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAuZm9ybS1sb2dpbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1heC13aWR0aDogODAlO1xuICB9XG5cbiAgLmZvcm0tbG9naW4gaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgfVxufVxuIl19 */");

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