webpackJsonp(["user.module"],{

/***/ "./src/app/user/layout/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".contact-header {\n    height: 40px;\n    line-height: 40px;\n    background: #fff url(/assets/pc_skinheader.jpg) 50% 100% no-repeat;\n    background-size: cover;\n    \n}\n.contact-float-left {\n    float: left;\n    color: white;\n}\n.contact-float-left a{\n    color: #b0b0b0;\n    text-decoration: none;\n}\na:hover {\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/user/layout/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-header\">\n    <div class=\"col-xs-6 contact-float-left\">\n        <p><span style=\"padding-right: 10px\">Hello {{username}} </span></p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/user/layout/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "username", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-header',
            template: __webpack_require__("./src/app/user/layout/header/header.component.html"),
            styles: [__webpack_require__("./src/app/user/layout/header/header.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/user/user-interface/user-interface.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n    background-color: #C5CAE9;\n    height: 100%;\n}\n.example-h2 {\n    margin: 10px;\n    background-color: #3F51B5;\n    color: white;\n    font-weight: bolder;\n    text-align: center;\n   \n  }\n.example-section {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 60px;\n}\n.example-margin {\n    margin: 0 10px;\n}\n.wrapper {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 1fr 8fr 1fr;\n        grid-template-columns: 1fr 8fr 1fr;\n    grid-gap: 5px;\n    text-align: center;\n}\n.mat-card {\n    margin: 10px;\n}\n.wrapper p{\n    padding: 10px;\n}\n.btn-wrapper {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 50% 50%;\n        grid-template-columns: 50% 50%;\n    text-align: center;\n}\n.mat-card-image {\n    vertical-align: middle;\n    border-radius: 50%;\n    margin: auto;\n    width: 250px;\n    height: 250px;\n    padding-top: 20px; \n}\n.mat-card-password {\n    width: calc(100%-100px);\n    margin: 0 auto;\n}\n.spinner-percent {\n    position: relative;\n\n}\n.percent{\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    margin: 0!important;\n    padding: 0!important;\n    font-size: 20px;\n}\n"

/***/ }),

/***/ "./src/app/user/user-interface/user-interface.component.html":
/***/ (function(module, exports) {

module.exports = "<app-user-header [username]=\"user.firstname\"></app-user-header>\n<div class=\"container-fluid\">\n  <div class=\"row\" style=\"margin-top: 65px;\">\n    <div class=\"col-sm-3 col-xs-12\">\n        <mat-card>\n          <div class=\"img-avt\">\n              <img class=\"img-responsive\" mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n          </div>\n            \n            <div class=\"text-center\"> \n              <button mat-button color=\"primary\">Update</button>\n            </div>\n           \n          </mat-card>\n          <mat-card>\n            <mat-card-content>\n              <h4 class=\"example-h2\">Level {{user.level}}</h4>\n              <div class=\"wrapper\">\n                <div></div>\n                <div>\n                  <div clas=\"spinner-percent\">\n                      <mat-progress-spinner\n                      style=\"margin:0 auto;\"\n                      class=\"example-margin\"\n                      [color]=\"color\"\n                      [mode]=\"mode\"\n                      [value]=\"value\">\n                    </mat-progress-spinner>\n\n                    <p class=\"percent\">{{value}}%</p>\n                  </div>\n                    \n                  <p>Your exp: {{user.exp}}/{{maxExp}}</p> \n                </div>\n                <div></div>\n              </div>\n              \n            </mat-card-content>\n          </mat-card>\n    </div>\n    <div class=\"col-sm-9 col-xs-12\">\n      <mat-card style=\"height:100%;\">\n          <mat-card-content>\n              <h4 class=\"example-h2\">Your infomation</h4>\n              \n          </mat-card-content>\n          <mat-card-content>\n              <mat-accordion class=\"example-headers-align\">\n                  <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle=\"true\">\n                    <mat-expansion-panel-header>\n                      <mat-panel-title>\n                        Personal data\n                      </mat-panel-title>\n                      <mat-panel-description>\n                        Type your name\n                        <mat-icon>account_circle</mat-icon>\n                      </mat-panel-description>\n                    </mat-expansion-panel-header>\n                \n                    <mat-form-field>\n                      <input matInput placeholder=\"First name\" [(ngModel)]= \"user.firstname\" #firstname=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" required>\n                      <mat-error  *ngIf=\"firstname.invalid && (firstname.dirty || firstname.touched)\">\n                        Firstname can not be blank\n                      </mat-error>\n                    </mat-form-field>\n                \n                    <mat-form-field>\n                      <input matInput placeholder=\"Last name\" [(ngModel)]= \"user.lastname\" #lastname=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" required>\n                      <mat-error  *ngIf=\"lastname.invalid && (lastname.dirty || lastname.touched)\">\n                        Lastname can not be blank\n                      </mat-error>\n                    </mat-form-field>\n                \n                    <mat-action-row>\n                      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n                    </mat-action-row>\n                  </mat-expansion-panel>\n                \n                  <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle=\"true\">\n                    <mat-expansion-panel-header>\n                      <mat-panel-title>\n                        Contact infomation\n                      </mat-panel-title>\n                      <mat-panel-description>\n                        Type your email and phone\n                        <mat-icon>map</mat-icon>\n                      </mat-panel-description>\n                    </mat-expansion-panel-header>\n                \n                    <mat-form-field>\n                      <input matInput placeholder=\"Email\" email [(ngModel)]= \"user.email\" #email=\"ngModel\" [ngModelOptions]=\"{standalone: true}\">\n                    </mat-form-field>\n                    <mat-form-field>\n                      <input matInput placeholder=\"Phone\" phone [(ngModel)]= \"user.phone\" #phone=\"ngModel\" [ngModelOptions]=\"{standalone: true}\">\n                    </mat-form-field>\n                \n                    <mat-action-row>\n                      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n                      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n                    </mat-action-row>\n                  </mat-expansion-panel>\n                \n                  <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle=\"true\">\n                    <mat-expansion-panel-header>\n                      <mat-panel-title>\n                        About yourself\n                      </mat-panel-title>\n                      <mat-panel-description>\n                        Type something about yourself\n                        <mat-icon>date_range</mat-icon>\n                      </mat-panel-description>\n                    </mat-expansion-panel-header>\n                \n                    <mat-form-field>\n                      <input matInput placeholder=\"...\" >\n                    </mat-form-field>\n                    <mat-datepicker #picker></mat-datepicker>\n                \n                    <mat-action-row>\n                      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n                      <button mat-button color=\"primary\" (click)=\"nextStep(); update()\">End</button>\n                    </mat-action-row>\n                  </mat-expansion-panel>\n                \n                </mat-accordion>\n          </mat-card-content>\n          <mat-card-footer>\n            <div class=\"btn-wrapper\">\n              <div>\n                <button mat-raised-button color=\"warn\" (click)= \"changePasswordFlag=!changePasswordFlag\">Change password</button>\n              </div>\n              <div>\n                  <button mat-raised-button style=\"background-color: #8C9EFF!important\">See Your posts</button>\n                </div>\n            </div> \n            \n          </mat-card-footer>\n      </mat-card>\n      <mat-card *ngIf=\"changePasswordFlag\">\n        <div class=\"mat-card-password\">\n            <mat-form-field>\n                <input type=\"password\" matInput placeholder=\"Current password\"  [(ngModel)]= \"password.oldPassword\" #oldPassword=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" >\n              </mat-form-field>\n              <mat-form-field>\n                <input type=\"password\" matInput placeholder=\"New password\" [(ngModel)]= \"password.newPassword\" #newPassword=\"ngModel\" [ngModelOptions]=\"{standalone: true}\">\n              </mat-form-field>\n              <mat-form-field>\n                <input type=\"password\" matInput placeholder=\"Confirm new password\" [(ngModel)]= \"password.confirmPassword\" #confirmPassword=\"ngModel\" [ngModelOptions]=\"{standalone: true}\">\n              </mat-form-field>\n              <button mat-raised-button color=\"warn\" (click)=\"changePassword()\">Change</button>\n            </div>\n      </mat-card>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/user-interface/user-interface.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInterfaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("./src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserInterfaceComponent = (function () {
    function UserInterfaceComponent(authService, alertService, levelService) {
        this.authService = authService;
        this.alertService = alertService;
        this.levelService = levelService;
        this.changePasswordFlag = false; // flag show card to change password
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 80; // progress spinner value
        this.maxExp = 60; // exp to level up
        this.step = 0;
        this.user = {};
        this.password = {}; // model to change password
    }
    UserInterfaceComponent.prototype.ngOnInit = function () {
        var id = JSON.parse(localStorage.getItem('currentUser'))._id;
        this.getUser(id);
        console.log(this.user);
    };
    UserInterfaceComponent.prototype.getProgress = function () {
        var _this = this;
        var data = {
            num: this.user.level,
            exp: this.user.exp
        };
        this.levelService.getProgress(data).subscribe(function (res) {
            var result = res.json();
            _this.value = Number.parseInt(result.progress);
            _this.maxExp = result.maxExp;
        }, function (err) {
            _this.alertService.error(err);
        });
    };
    UserInterfaceComponent.prototype.getUser = function (id) {
        var _this = this;
        this.authService.findById(id)
            .subscribe(function (res) {
            _this.user = res;
            _this.getProgress();
        }, function (err) {
            _this.alertService.error(err);
        });
    };
    UserInterfaceComponent.prototype.update = function () {
        var _this = this;
        this.authService.update(JSON.parse(localStorage.getItem('currentUser'))._id, this.user)
            .subscribe(function (res) {
            _this.alertService.success('Update success');
        }, function (err) {
            _this.alertService.error(err);
        });
    };
    UserInterfaceComponent.prototype.changePassword = function () {
        var _this = this;
        if (this.password.newPassword !== this.password.confirmPassword) {
            this.alertService.error('Password confirm incorect');
        }
        else {
            if (this.password.newPassword.lenght < 8 || this.password.confirmPassword.length < 8) {
                this.alertService.error('Password must have at least 8 character');
            }
            else {
                this.authService.changePassword(JSON.parse(localStorage.getItem('currentUser'))._id, this.password)
                    .subscribe(function (res) {
                    _this.alertService.success('change success');
                }, function (err) {
                    _this.alertService.error(err);
                });
            }
        }
    };
    UserInterfaceComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    UserInterfaceComponent.prototype.nextStep = function () {
        this.step++;
    };
    UserInterfaceComponent.prototype.prevStep = function () {
        this.step--;
    };
    UserInterfaceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-interface',
            template: __webpack_require__("./src/app/user/user-interface/user-interface.component.html"),
            styles: [__webpack_require__("./src/app/user/user-interface/user-interface.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["b" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_1__services_index__["d" /* LevelService */]])
    ], UserInterfaceComponent);
    return UserInterfaceComponent;
}());



/***/ }),

/***/ "./src/app/user/user-interface/user-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_interface_component__ = __webpack_require__("./src/app/user/user-interface/user-interface.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__user_interface_component__["a" /* UserInterfaceComponent */]
    }
];
var UserRoutingModule = (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/user/user-interface/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_routing_module__ = __webpack_require__("./src/app/user/user-interface/user-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_interface_component__ = __webpack_require__("./src/app/user/user-interface/user-interface.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layout_header_header_component__ = __webpack_require__("./src/app/user/layout/header/header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UserModule = (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__user_routing_module__["a" /* UserRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["u" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["w" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["x" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["y" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["z" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["A" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["C" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["B" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["E" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["H" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["I" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["J" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["K" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["F" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__user_interface_component__["a" /* UserInterfaceComponent */], __WEBPACK_IMPORTED_MODULE_6__layout_header_header_component__["a" /* HeaderComponent */]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ })

});
//# sourceMappingURL=user.module.chunk.js.map