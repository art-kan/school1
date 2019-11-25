(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["plugins-contacts-manager-contacts-manager-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/plugins/contacts-manager/contacts-editor/contacts-editor.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/plugins/contacts-manager/contacts-editor/contacts-editor.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <form action=\"#\">\n    <h2>Главные</h2>\n    <input type=\"text\" name=\"copyright\" placeholder=\"Копирайт\" [(ngModel)]=\"data.copyright\" required>\n    <input type=\"text\" name=\"address\" placeholder=\"Адресс\" [(ngModel)]=\"data.address\" required>\n    <input type=\"text\" name=\"tel\" placeholder=\"Телефон номер\" [(ngModel)]=\"data.tel\" required>\n    <input type=\"text\" name=\"gmail\" placeholder=\"Gmail\" [(ngModel)]=\"data.gmail\" required>\n\n    <h2>Социальные сети</h2>\n    <input type=\"text\" name=\"telegram\" placeholder=\"Telegram\" [(ngModel)]=\"data.telegram\">\n    <input type=\"text\" name=\"instagram\" placeholder=\"Instagram\" [(ngModel)]=\"data.instagram\">\n\n    <hr>\n    <button\n      (click)=\"submit()\"\n      type=\"submit\">Отправить изменения</button>\n  </form>\n</div>");

/***/ }),

/***/ "./src/app/plugins/contacts-manager/contacts-editor/contacts-editor.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/plugins/contacts-manager/contacts-editor/contacts-editor.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  padding: 0 50px;\n}\n\ninput {\n  display: block;\n  width: 100%;\n  padding: 3px 5px;\n  height: 2em;\n  margin: 3px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbnRhY3RzLW1hbmFnZXIvY29udGFjdHMtZWRpdG9yL2NvbnRhY3RzLWVkaXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxhQUFhO0FBQ2YiLCJmaWxlIjoiLi4vY29udGFjdHMtbWFuYWdlci9jb250YWN0cy1lZGl0b3IvY29udGFjdHMtZWRpdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIHBhZGRpbmc6IDAgNTBweDtcbn1cblxuaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG4gIGhlaWdodDogMmVtO1xuICBtYXJnaW46IDNweCAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/plugins/contacts-manager/contacts-editor/contacts-editor.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/plugins/contacts-manager/contacts-editor/contacts-editor.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ContactsEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsEditorComponent", function() { return ContactsEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth.service */ "./src/app/auth.service.ts");




let ContactsEditorComponent = class ContactsEditorComponent {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
        this.data = {
            address: '',
            copyright: '',
            gmail: '',
            tel: '',
        };
    }
    ngOnInit() {
        this.http.get('/handle.php?action=getcontacts&key=' + this.auth.getKey()).subscribe(res => this.data = res);
    }
    submit() {
        this.http.post('/handle.php', Object.assign({}, this.data, { action: 'editcontacts', key: this.auth.getKey() })).subscribe((res) => {
            if (res['ok'])
                alert('[UPDATE]: success');
            else
                alert('[UPDATE]: FAIL');
        });
    }
};
ContactsEditorComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
ContactsEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contacts-editor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contacts-editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/plugins/contacts-manager/contacts-editor/contacts-editor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contacts-editor.component.css */ "./src/app/plugins/contacts-manager/contacts-editor/contacts-editor.component.css")).default]
    })
], ContactsEditorComponent);



/***/ }),

/***/ "./src/app/plugins/contacts-manager/contacts-manager-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/plugins/contacts-manager/contacts-manager-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ContactsManagerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsManagerRoutingModule", function() { return ContactsManagerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contacts_editor_contacts_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts-editor/contacts-editor.component */ "./src/app/plugins/contacts-manager/contacts-editor/contacts-editor.component.ts");




const routes = [
    { path: '', component: _contacts_editor_contacts_editor_component__WEBPACK_IMPORTED_MODULE_3__["ContactsEditorComponent"] },
];
let ContactsManagerRoutingModule = class ContactsManagerRoutingModule {
};
ContactsManagerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ContactsManagerRoutingModule);



/***/ }),

/***/ "./src/app/plugins/contacts-manager/contacts-manager.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/plugins/contacts-manager/contacts-manager.module.ts ***!
  \*********************************************************************/
/*! exports provided: ContactsManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsManagerModule", function() { return ContactsManagerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _contacts_manager_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contacts-manager-routing.module */ "./src/app/plugins/contacts-manager/contacts-manager-routing.module.ts");
/* harmony import */ var _contacts_editor_contacts_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacts-editor/contacts-editor.component */ "./src/app/plugins/contacts-manager/contacts-editor/contacts-editor.component.ts");







let ContactsManagerModule = class ContactsManagerModule {
};
ContactsManagerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_contacts_editor_contacts_editor_component__WEBPACK_IMPORTED_MODULE_6__["ContactsEditorComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _contacts_manager_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactsManagerRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        ]
    })
], ContactsManagerModule);



/***/ })

}]);
//# sourceMappingURL=plugins-contacts-manager-contacts-manager-module.js.map