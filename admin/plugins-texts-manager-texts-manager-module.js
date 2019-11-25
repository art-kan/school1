(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["plugins-texts-manager-texts-manager-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/plugins/texts-manager/text-editing/text-editing.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/plugins/texts-manager/text-editing/text-editing.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <select\n    (change)=\"selectText($event.target.value)\"\n    name=\"name\"\n  >\n    <option\n     *ngFor=\"let meta of textsMeta\"\n     [value]=\"meta.name\"\n    >{{ meta.title }}</option>\n  </select>\n  <input name=\"title\" [(ngModel)]=\"title\">\n  <textarea name=\"content\" [(ngModel)]=\"content\"></textarea>\n  <button (click)=\"submit()\">Изменить</button>\n</div>");

/***/ }),

/***/ "./src/app/plugins/texts-manager/text-editing/text-editing.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/plugins/texts-manager/text-editing/text-editing.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  display: flex;\n  flex-direction: column;\n}\n\n.wrapper > * {\n  width: 100%;\n  margin: 10px 0;\n}\n\nselect,\ninput,\ntextarea {\n  padding: 5px 10px;\n}\n\ntextarea {\n  min-height: 50vh;\n}\n\nbutton {\n  padding: 10px 20px;\n  background: #8B2525;\n  border: 1px solid red;\n  color: #ccc;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RleHRzLW1hbmFnZXIvdGV4dC1lZGl0aW5nL3RleHQtZWRpdGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsZUFBZTtBQUNqQiIsImZpbGUiOiIuLi90ZXh0cy1tYW5hZ2VyL3RleHQtZWRpdGluZy90ZXh0LWVkaXRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLndyYXBwZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG5zZWxlY3QsXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG5cbnRleHRhcmVhIHtcbiAgbWluLWhlaWdodDogNTB2aDtcbn1cblxuYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjOEIyNTI1O1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIGNvbG9yOiAjY2NjO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/plugins/texts-manager/text-editing/text-editing.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/plugins/texts-manager/text-editing/text-editing.component.ts ***!
  \******************************************************************************/
/*! exports provided: TextEditingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextEditingComponent", function() { return TextEditingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth.service */ "./src/app/auth.service.ts");




let TextEditingComponent = class TextEditingComponent {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
        this.textsMeta = [];
        this.selname = '';
        this.title = '';
        this.content = '';
    }
    ngOnInit() {
        this.getTextNames()
            .subscribe((list) => {
            this.textsMeta = list.map((el) => {
                el['title'] = el['title_ru'];
                delete el['title_ru'];
                return el;
            });
            if (list[0]) {
                this.selectText(list[0]['name']);
            }
        });
    }
    selectText(name) {
        this.selname = name;
        this.getTextContent(name)
            .subscribe((res) => {
            if (!res['ok'])
                return alert('ERROR');
            this.title = res['title_ru'];
            this.content = res['content_ru'];
        });
    }
    submit() {
        const selname = this.selname;
        const title = this.title;
        this.http.post('/handle.php', {
            action: 'edittext',
            name: selname,
            title_ru: title,
            content_ru: this.content,
            key: this.auth.getKey(),
        }).subscribe((rs) => {
            if (rs['ok']) {
                const textMeta = this.textsMeta.find((t) => {
                    return t.name === selname;
                });
                textMeta.title = title;
                alert('[UPDATE]: Success');
            }
            else {
                alert('[UPDATE]: Fail');
            }
        });
    }
    getTextNames() {
        return this.http.get('/handle.php?action=listtexts&key=' + this.auth.getKey());
    }
    getTextContent(name) {
        return this.http.get(`/handle.php?action=gettext&name=${name}&key=`
            + this.auth.getKey());
    }
};
TextEditingComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
TextEditingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-text-editing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./text-editing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/plugins/texts-manager/text-editing/text-editing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./text-editing.component.css */ "./src/app/plugins/texts-manager/text-editing/text-editing.component.css")).default]
    })
], TextEditingComponent);



/***/ }),

/***/ "./src/app/plugins/texts-manager/texts-manager-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/plugins/texts-manager/texts-manager-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: TextsManagerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextsManagerRoutingModule", function() { return TextsManagerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _text_editing_text_editing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text-editing/text-editing.component */ "./src/app/plugins/texts-manager/text-editing/text-editing.component.ts");




const routes = [
    { path: '**', component: _text_editing_text_editing_component__WEBPACK_IMPORTED_MODULE_3__["TextEditingComponent"] },
];
let TextsManagerRoutingModule = class TextsManagerRoutingModule {
};
TextsManagerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TextsManagerRoutingModule);



/***/ }),

/***/ "./src/app/plugins/texts-manager/texts-manager.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/plugins/texts-manager/texts-manager.module.ts ***!
  \***************************************************************/
/*! exports provided: TextsManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextsManagerModule", function() { return TextsManagerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _texts_manager_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./texts-manager-routing.module */ "./src/app/plugins/texts-manager/texts-manager-routing.module.ts");
/* harmony import */ var _text_editing_text_editing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./text-editing/text-editing.component */ "./src/app/plugins/texts-manager/text-editing/text-editing.component.ts");







let TextsManagerModule = class TextsManagerModule {
};
TextsManagerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_text_editing_text_editing_component__WEBPACK_IMPORTED_MODULE_6__["TextEditingComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _texts_manager_routing_module__WEBPACK_IMPORTED_MODULE_5__["TextsManagerRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        ]
    })
], TextsManagerModule);



/***/ })

}]);
//# sourceMappingURL=plugins-texts-manager-texts-manager-module.js.map