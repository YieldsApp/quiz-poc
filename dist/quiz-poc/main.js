(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_questions_questions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/questions/questions.component */ "./src/app/components/questions/questions.component.ts");




var routes = [
    { path: 'smart-ai-recognition', component: _components_questions_questions_component__WEBPACK_IMPORTED_MODULE_3__["QuestionsComponent"] },
    { path: '', redirectTo: '/smart-ai-recognition', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n\n  <mat-toolbar-row >\n    <span>{{ title }}</span>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar-row {\n  white-space: normal; }\n\n.spacer {\n  flex: 1 1 auto; }\n\n.icon {\n  padding: 0 14px; }\n\n.header-image {\n  background-image: url(\"/assets/image1.png\");\n  background-size: cover; }\n\n.card-start-quiz {\n  text-align: center;\n  vertical-align: middle; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFByb2plY3RzXFxxdWl6LXBvYy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlDO0VBQ0Msb0JBQW1CLEVBQ25COztBQUVBO0VBQ0UsZUFBYyxFQUNmOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSw0Q0FBMkM7RUFDM0MsdUJBQXNCLEVBQ3ZCOztBQUNEO0VBQ0ksbUJBQWtCO0VBQ2xCLHVCQUFzQixFQUN6QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuICBcclxuXHJcbiBtYXQtdG9vbGJhci1yb3d7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuIH0gXHJcblxyXG4gIC5zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG4gIC5pY29uIHtcclxuICAgIHBhZGRpbmc6IDAgMTRweDtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2UxLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgLmNhcmQtc3RhcnQtcXVpentcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuXHJcbiAiXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'yieldsApp diseases identification module';
    }
    AppComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = function (event) {
                _this.url = event.target.result;
            };
        }
    };
    AppComponent.prototype.goToQuestions = function () {
        this.router.navigateByUrl('/smart-ai-recognition');
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _components_questions_questions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/questions/questions.component */ "./src/app/components/questions/questions.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_questions_questions_component__WEBPACK_IMPORTED_MODULE_10__["QuestionsComponent"],
                _components_questions_questions_component__WEBPACK_IMPORTED_MODULE_10__["DialogDataResultDialog"]
            ],
            entryComponents: [_components_questions_questions_component__WEBPACK_IMPORTED_MODULE_10__["DialogDataResultDialog"]],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/questions/dialog-data-result-dialog.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/questions/dialog-data-result-dialog.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Identification</h1>\r\n<div mat-dialog-content>\r\n  <b><h3>{{data.name}}</h3></b>\r\n   <div *ngIf=\"data.probability>0\">probabilty:  \r\n    <b><h3>{{data.probability}} %</h3></b>\r\n   </div>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/components/questions/questions.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/questions/questions.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n\n  <div fxFlex=\"90\" fxFlex.gt-xs=\"33\" class=\"one\">\n    \n    <button mat-button (click)=\"fileInput.click()\" *ngIf=\"!url\">\n      <mat-icon class=\"icon\">library_add</mat-icon>\n      <span class=\"image-select\">Select Image</span>\n      <input #fileInput type=\"file\" (change)=\"onSelectFile($event)\" style=\"display:none;\" />\n    </button>\n\n    <mat-card *ngIf=\"question && url\">\n      <img mat-card-image [src]=\"url\" *ngIf=\"url\" alt=\"Photo of a Shiba Inu\">\n      <mat-card-header>\n        <mat-card-title>{{question.text}}</mat-card-title>\n      </mat-card-header>\n\n      <mat-card-content>\n        <mat-form-field>\n          <mat-select placeholder=\"choose an option\" [(ngModel)]=\"selectedAnswer\">\n            <mat-option *ngFor=\"let answer of question.answers\" [value]=\"answer.id\">\n              {{answer.text}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n      </mat-card-content>\n      <mat-card-actions fxLayoutAlign=\"space-around center\">\n        <button (click)=\"goToNextQuestion();\" [disabled]=\"question.isLast || !this.selectedAnswer\" mat-flat-button\n          color=\"accent\">Next</button>\n        <button (click)=\"calculate();\" [disabled]=\"!question.isLast || !this.selectedAnswer\" mat-flat-button color=\"accent\">Recognize</button>\n      </mat-card-actions>\n\n    </mat-card>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/questions/questions.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/questions/questions.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card-header-text {\n  margin: 0px !important;\n  padding: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdWVzdGlvbnMvQzpcXFByb2plY3RzXFxxdWl6LXBvYy9zcmNcXGFwcFxcY29tcG9uZW50c1xccXVlc3Rpb25zXFxxdWVzdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx1QkFBc0I7RUFDdEIsd0JBQXVCLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9xdWVzdGlvbnMvcXVlc3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XHJcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/questions/questions.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/questions/questions.component.ts ***!
  \*************************************************************/
/*! exports provided: DialogDataResultDialog, QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDataResultDialog", function() { return DialogDataResultDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_questions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/questions.service */ "./src/app/services/questions.service.ts");
/* harmony import */ var src_app_models_answer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/answer */ "./src/app/models/answer.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var DialogDataResultDialog = /** @class */ (function () {
    function DialogDataResultDialog(data) {
        this.data = data;
    }
    DialogDataResultDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dialog-data-result-dialog',
            template: __webpack_require__(/*! ./dialog-data-result-dialog.html */ "./src/app/components/questions/dialog-data-result-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], DialogDataResultDialog);
    return DialogDataResultDialog;
}());

var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent(router, service, dialog) {
        this.router = router;
        this.service = service;
        this.dialog = dialog;
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log("ngOnInit fired");
        this.service.getFirstQuestion()
            .subscribe(function (question) { return _this.question = question; });
    };
    QuestionsComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = function (event) {
                _this.url = event.target.result;
            };
        }
    };
    QuestionsComponent.prototype.goToNextQuestion = function () {
        var _this = this;
        var answer = new src_app_models_answer__WEBPACK_IMPORTED_MODULE_4__["Answer"]();
        answer.id = this.selectedAnswer;
        this.service.addAnswer(this.question, answer);
        this.service.getNextQuestion(this.question, answer)
            .subscribe(function (question) {
            _this.question = question;
            _this.selectedAnswer = null;
        });
    };
    QuestionsComponent.prototype.calculate = function () {
        var _this = this;
        var answer = new src_app_models_answer__WEBPACK_IMPORTED_MODULE_4__["Answer"]();
        answer.id = this.selectedAnswer;
        this.service.addAnswer(this.question, answer);
        if (this.result) {
            this.showDialogResult();
            return;
        }
        this.service.calculate().subscribe(function (data) {
            _this.result = data;
            _this.showDialogResult();
        });
    };
    QuestionsComponent.prototype.showDialogResult = function () {
        this.dialog.open(DialogDataResultDialog, {
            data: this.result
        });
    };
    QuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-questions',
            template: __webpack_require__(/*! ./questions.component.html */ "./src/app/components/questions/questions.component.html"),
            providers: [src_app_services_questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"]],
            styles: [__webpack_require__(/*! ./questions.component.scss */ "./src/app/components/questions/questions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/models/answer.ts":
/*!**********************************!*\
  !*** ./src/app/models/answer.ts ***!
  \**********************************/
/*! exports provided: Answer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return Answer; });
var Answer = /** @class */ (function () {
    function Answer() {
    }
    return Answer;
}());



/***/ }),

/***/ "./src/app/services/questions.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/questions.service.ts ***!
  \***********************************************/
/*! exports provided: QuestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsService", function() { return QuestionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




var QuestionsService = /** @class */ (function () {
    function QuestionsService(http) {
        this.http = http;
        this.answers = [];
    }
    // Get all posts from the API
    QuestionsService.prototype.getFirstQuestion = function () {
        return this.http.get(this.baseUrl + '/api/Question/0');
    };
    QuestionsService.prototype.addAnswer = function (question, answer) {
        if (lodash__WEBPACK_IMPORTED_MODULE_3___default.a.find(this.answers, { questionId: question.id }))
            return;
        this.answers.push({ questionId: question.id, answerId: answer.id });
    };
    // Get all posts from the API
    QuestionsService.prototype.getNextQuestion = function (question, answer) {
        return this.http.get(this.baseUrl + ("/api/nextQuestion/" + question.id + "/" + answer.id));
    };
    QuestionsService.prototype.calculate = function () {
        return this.http.post(this.baseUrl + '/api/results', this.answers);
    };
    QuestionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], QuestionsService);
    return QuestionsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\quiz-poc\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map