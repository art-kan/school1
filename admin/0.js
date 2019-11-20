(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/plugins/posts-manager/post-editor/post-editor.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/plugins/posts-manager/post-editor/post-editor.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"top\">\n    <div class=\"preview-upload\">\n      <img [src]=\"data.preview_url || 'https://via.placeholder.com/470x330'\"\n        #previewbox class=\"preview-box\">\n      <button (click)=\"input.click()\" class=\"preview-input\">Загрузить превью</button>\n      <input type=\"file\" #input (change)=\"preview(input)\" class=\"hidden\">\n    </div>\n    <textarea\n      type=\"text\" name=\"title\"\n      class=\"title-input\"\n      placeholder=\"Название\"\n      [(ngModel)]=\"data.title\">\n    </textarea>\n  </div>\n  <div class=\"editor-wrapper\">\n    <quill-editor\n      [(ngModel)]=\"data.text\"\n      placeholder=\"Редактор поста\"\n    ></quill-editor>\n  </div>\n  <button (click)=\"submit()\">Отправить</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/plugins/posts-manager/posts-list/posts-list.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/plugins/posts-manager/posts-list/posts-list.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a\n  [routerLink]=\"[ 'new' ]\"\n  class=\"create-post-link\"\n>Создать новый пост</a>\n<ul class=\"posts-list\">\n  <li *ngFor=\"let post of posts; index as i\" class=\"post-li\">\n    <div class  =\"post-box\">\n      <div class=\"post-name\">{{ post.title }}</div>\n      <a [routerLink]=\"['edit', post.id]\" class=\"btn-post edit-post\">E</a>\n      <button (click)=\"delete(post.id, i)\" class=\"btn-post delete-post\">D</button>\n    </div>\n  </li>\n</ul>\n\n<p class=\"empty-note\" *ngIf=\"posts.length === 0\">Нет ниодного поста :(</p>");

/***/ }),

/***/ "./src/app/plugins/posts-manager/post-editor/post-editor.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/plugins/posts-manager/post-editor/post-editor.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top {\n  display: flex;\n}\n\n.title-input {\n  width: 100%;\n  padding: 5px;\n  margin-left: 15px;\n  margin-bottom: 5px;\n  resize: none;\n  font-size: 38px;\n  line-height: 1.3;\n  color: #343F64;\n}\n\n.preview-upload {\n  max-width: 470px;\n  position: relative;\n}\n\n.preview-box {\n  display: block;\n  border: 1px solid #fff;\n  max-width: 470px;\n  max-height: 330px;\n  background: #CCCCCC;\n}\n\n.preview-input {\n  width: 100%;\n  margin: 5px 0;\n  background: #FEC525;\n  border: 2px solid #A10000;\n  height: 2em;\n}\n\n.editor-wrapper {\n  background: #fff;\n}\n\n@media (max-width: 1200px) {\n  .top {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .title-input {\n    margin-left: 0;\n    margin-top: 5px;\n    font-size: 20px;\n    height: 3em;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wbHVnaW5zL3Bvc3RzLW1hbmFnZXIvcG9zdC1lZGl0b3IvcG9zdC1lZGl0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0lBQ2YsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoiYXBwL3BsdWdpbnMvcG9zdHMtbWFuYWdlci9wb3N0LWVkaXRvci9wb3N0LWVkaXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50aXRsZS1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHJlc2l6ZTogbm9uZTtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBjb2xvcjogIzM0M0Y2NDtcbn1cblxuLnByZXZpZXctdXBsb2FkIHtcbiAgbWF4LXdpZHRoOiA0NzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJldmlldy1ib3gge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgbWF4LXdpZHRoOiA0NzBweDtcbiAgbWF4LWhlaWdodDogMzMwcHg7XG4gIGJhY2tncm91bmQ6ICNDQ0NDQ0M7XG59XG5cbi5wcmV2aWV3LWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNXB4IDA7XG4gIGJhY2tncm91bmQ6ICNGRUM1MjU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBMTAwMDA7XG4gIGhlaWdodDogMmVtO1xufVxuXG4uZWRpdG9yLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC50b3Age1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC50aXRsZS1pbnB1dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBoZWlnaHQ6IDNlbTtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/plugins/posts-manager/post-editor/post-editor.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/plugins/posts-manager/post-editor/post-editor.component.ts ***!
  \****************************************************************************/
/*! exports provided: PostEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostEditorComponent", function() { return PostEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _posts_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posts-manager.service */ "./src/app/plugins/posts-manager/posts-manager.service.ts");




let PostEditorComponent = class PostEditorComponent {
    constructor(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.data = {
            title: '',
            text: '',
            date: '',
            id: 0,
            preview_url: '',
        };
        this.fileReader = new FileReader;
        this.fileReader.addEventListener('load', () => {
            this.data.preview_url = this.fileReader.result + '';
        }, false);
    }
    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        if (id != null) {
            this.id = id;
            this.http
                .getPost(this.id)
                .subscribe(rs => {
                this.data = rs;
            });
        }
    }
    preview(input) {
        const file = input.files[0];
        if (file == null)
            return;
        this.fileReader.readAsDataURL(file);
    }
    submit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const formData = this.data;
            if (this.id) { // to update
                this.http.updatePost(formData)
                    .subscribe((rs) => {
                    alert(`[UPDATE]: ${rs['ok'] ? 'Success' : 'Fail'}`);
                });
            }
            else { // to create new
                this.http.newPost(formData)
                    .subscribe((rs) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    if (!rs['ok']) {
                        return alert('[UPDATE]: Fail');
                    }
                    if (this.data.preview_url
                        && this.data.preview_url.startsWith('data:image/')) {
                        formData.preview_url = yield this.http
                            .uploadImage(this.data.preview_url, this.data.id);
                    }
                    this.router.navigate(['/', 'posts', 'edit', this.data.id]);
                }));
            }
        });
    }
};
PostEditorComponent.ctorParameters = () => [
    { type: _posts_manager_service__WEBPACK_IMPORTED_MODULE_3__["PostsManagerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editor', { static: false })
], PostEditorComponent.prototype, "editorRef", void 0);
PostEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-editor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/plugins/posts-manager/post-editor/post-editor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-editor.component.css */ "./src/app/plugins/posts-manager/post-editor/post-editor.component.css")).default]
    })
], PostEditorComponent);



/***/ }),

/***/ "./src/app/plugins/posts-manager/posts-list/posts-list.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/plugins/posts-manager/posts-list/posts-list.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".post-li {\n  border: 2px solid #5C3617;\n  border-bottom: 0;\n  padding: 8px 15px;\n  background: #D5D5D5;\n  color: #000;\n}\n\n.post-li:last-child {\n  border-bottom: 2px solid #251D00;\n}\n\n.post-box {\n  display: flex;\n}\n\n.post-name {\n  width: 100%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.btn-post {\n  width: 22px;\n  height: 22px;\n  border: 2px solid #000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 3px;\n}\n\n.create-post-link {\n  display: block;\n  border: 2px solid #4a4823;\n  background: #edff78;\n  padding: 8px 15px;\n  margin-bottom: 15px;\n}\n\n.empty-note {\n  font-style: italic;\n  font-size: 20px;\n  padding-left: 3em;\n  margin-top: 1.4em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wbHVnaW5zL3Bvc3RzLW1hbmFnZXIvcG9zdHMtbGlzdC9wb3N0cy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJhcHAvcGx1Z2lucy9wb3N0cy1tYW5hZ2VyL3Bvc3RzLWxpc3QvcG9zdHMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3QtbGkge1xuICBib3JkZXI6IDJweCBzb2xpZCAjNUMzNjE3O1xuICBib3JkZXItYm90dG9tOiAwO1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgYmFja2dyb3VuZDogI0Q1RDVENTtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5wb3N0LWxpOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzI1MUQwMDtcbn1cblxuLnBvc3QtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnBvc3QtbmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmJ0bi1wb3N0IHtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAzcHg7XG59XG5cbi5jcmVhdGUtcG9zdC1saW5rIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM0YTQ4MjM7XG4gIGJhY2tncm91bmQ6ICNlZGZmNzg7XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZW1wdHktbm90ZSB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNlbTtcbiAgbWFyZ2luLXRvcDogMS40ZW07XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/plugins/posts-manager/posts-list/posts-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/plugins/posts-manager/posts-list/posts-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: PostsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsListComponent", function() { return PostsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _posts_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts-manager.service */ "./src/app/plugins/posts-manager/posts-manager.service.ts");



let PostsListComponent = class PostsListComponent {
    constructor(http) {
        this.http = http;
        this.posts = [];
    }
    ngOnInit() {
        this.initList();
    }
    initList() {
        this.http.getList().subscribe(ps => this.posts = ps);
    }
    delete(id, index) {
        return this.http.deletePost(id)
            .subscribe((response) => {
            if (response['ok']) {
                alert('The post is deleted successfully.');
                this.posts.splice(index, 1);
            }
            else {
                alert('The fail to delete the post.');
            }
        });
    }
};
PostsListComponent.ctorParameters = () => [
    { type: _posts_manager_service__WEBPACK_IMPORTED_MODULE_2__["PostsManagerService"] }
];
PostsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posts-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./posts-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/plugins/posts-manager/posts-list/posts-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./posts-list.component.css */ "./src/app/plugins/posts-manager/posts-list/posts-list.component.css")).default]
    })
], PostsListComponent);



/***/ }),

/***/ "./src/app/plugins/posts-manager/posts-manager-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/plugins/posts-manager/posts-manager-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: PostsManagerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsManagerRoutingModule", function() { return PostsManagerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _post_editor_post_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-editor/post-editor.component */ "./src/app/plugins/posts-manager/post-editor/post-editor.component.ts");
/* harmony import */ var _posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts-list/posts-list.component */ "./src/app/plugins/posts-manager/posts-list/posts-list.component.ts");





const routes = [
    { path: 'edit/:id', component: _post_editor_post_editor_component__WEBPACK_IMPORTED_MODULE_3__["PostEditorComponent"] },
    { path: 'new', component: _post_editor_post_editor_component__WEBPACK_IMPORTED_MODULE_3__["PostEditorComponent"] },
    { path: '', pathMatch: 'full', component: _posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_4__["PostsListComponent"] },
    { path: '**', redirectTo: '' },
];
let PostsManagerRoutingModule = class PostsManagerRoutingModule {
};
PostsManagerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PostsManagerRoutingModule);



/***/ }),

/***/ "./src/app/plugins/posts-manager/posts-manager.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/plugins/posts-manager/posts-manager.service.ts ***!
  \****************************************************************/
/*! exports provided: PostsManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsManagerService", function() { return PostsManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");






let PostsManagerService = class PostsManagerService {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    getPost(id) {
        return this.http.get(`/handle.php?action=getpost&id=${id}&` +
            `key=${this.auth.getKey()}`);
    }
    getList() {
        return this.http.get('/handle.php?action=listposts&' +
            `key=${this.auth.getKey()}`);
    }
    newPost(data) {
        return this.http.post('/handle.php', {
            action: 'newpost',
            key: this.auth.getKey(),
            title: data.title,
            text: '.',
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((rs) => {
            if (!rs['ok'])
                return;
            data.id = rs['id'];
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.uploadImagesFromPost(data))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(() => this.http.post('/handle.php', Object.assign({ action: 'editpost' }, data, { key: this.auth.getKey() }))));
        }));
    }
    updatePost(data) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.uploadImagesFromPost(data))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(() => this.http.post('/handle.php', Object.assign({ action: 'editpost' }, data, { key: this.auth.getKey() }))));
    }
    deletePost(id) {
        return this.http.delete(`/handle.php?action=deletepost&id=${id}&` +
            `key=${this.auth.getKey()}`);
    }
    uploadImagesFromPost(post) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const html = document.createElement('div');
            html.innerHTML = post.text;
            const postId = post.id;
            const images = Array.from(html.querySelectorAll('img[src^="data:image/"]'));
            for (const image of images) {
                const path = yield this.uploadImage(image.src, postId);
                image.src = path;
            }
            post.text = html.innerHTML;
        });
    }
    uploadImage(dataUrl, postId) {
        const ext = /^data:image\/(\w+)/.exec(dataUrl)[1];
        const file = this.imgDataUrlToFile(dataUrl, `image.${ext}`);
        const formData = new FormData;
        formData.append('image', file);
        formData.append('postid', postId);
        // formData.append('s_key', 'admin_key');
        return fetch('/handle.php?action=uploadimage&key=' + this.auth.getKey(), {
            method: 'POST',
            body: formData
        }).then((res) => res.json())
            .then((json) => {
            console.log(json);
            return json['filepaths']['image'];
        });
    }
    imgDataUrlToFile(dataurl, filename) {
        const arr = dataurl.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }
};
PostsManagerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
PostsManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PostsManagerService);



/***/ })

}]);
//# sourceMappingURL=0.js.map