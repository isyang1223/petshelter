webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/allpet/allpet.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/allpet/allpet.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3 class=\"header\">These pets are looking for a home!</h3>\n  <button class=\"btn btn-primary newbutton header\" [routerLink]=\"['new']\">\n   Add a pet to the shelter\n  </button>\n</div>\n\n<div class=\"container pics\">\n  <img src=\"../assets/adopt_pet_header.jpg\">\n\n</div>\n\n\n<div class=\"container well\">\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>Profile Picture</th>\n        <th>\n          <a class=\"sort\" (click)=\"sortType('name')\" [class.active]=\"sortBy === 'name'\">Name</a>\n        </th>\n\n\n        <th>\n          <a class=\"sort\" (click)=\"sortType('type')\" [class.active]=\"sortBy === 'type'\">Type</a>\n        </th>\n        <th>\n          <a class=\"sort\" (click)=\"sortType('like')\" [class.active]=\"sortBy === 'like'\">Like</a>\n        </th>\n        <th>\n          <a class=\"sort\" (click)=\"sortType('createdAt')\" [class.active]=\"sortBy === 'createdAt'\">Created at</a>\n        </th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let pet of pets\">\n        <td>\n          <img src=\"{{ pet.profileImage }}\">\n        </td>\n        <td>\n          <a (click)=\"showPet(pet)\" [routerLink]=\"['/details/' + pet._id]\">{{ pet.name }}</a>\n        </td>\n        <td>{{ pet.type }}</td>\n        <td>{{ pet.like }}</td>\n        <td>{{ pet.createdAt | date: 'dd/MM/yyyy' }}</td>\n        <td>\n          <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"showPet(pet)\" [routerLink]=\"['/details/' + pet._id]\">Details</button>\n\n          <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"showPet(pet)\" [routerLink]=\"['/edit/' + pet._id]\">Edit</button>\n\n\n\n        </td>\n      </tr>\n    </tbody>\n\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/allpet/allpet.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var AllpetComponent = /** @class */ (function () {
    function AllpetComponent(_httpService) {
        this._httpService = _httpService;
        this.pets = [];
        this.pet = {};
        this.clicked = false;
    }
    AllpetComponent.prototype.ngOnInit = function () {
        this.getPets();
    };
    AllpetComponent.prototype.getPets = function () {
        var _this = this;
        var observable = this._httpService.getPets();
        observable.subscribe(function (data) {
            _this.pets = data["data"];
            // this.pets.sort(function (a, b) {
            //   if (a.type < b.type) {
            //     return -1;
            //   }
            //   if (a.type > b.type) {
            //     return 1;
            //   }
            //   return 0
            // })
        });
    };
    AllpetComponent.prototype.sortType = function (sort) {
        if (sort === 'name' && this.clicked == false) {
            this.pets = this.pets.sort(this.sortByName);
            console.log(this.pets);
            this.clicked = true;
            console.log("clicked1!!!!!!");
        }
        else if (sort === 'name' && this.clicked == true) {
            this.pets = this.pets.sort(this.sortByName);
            var a = this.pets.reverse();
            this.pets = a;
            console.log("sorting by NAME!!!!!!!!!!!!!!!!!!!!!!!");
            console.log(this.pets);
            this.clicked = false;
            console.log("clicked2!!!!!!");
        }
        if (sort === 'type' && this.clicked == false) {
            this.pets = this.pets.sort(this.sortByType);
            console.log(this.pets);
            this.clicked = true;
        }
        else if (sort === 'type' && this.clicked == true) {
            this.pets = this.pets.sort(this.sortByType);
            var a = this.pets.reverse();
            this.pets = a;
            console.log("sorting by TYPE!!!!!!!!!!!!!!!!!!!!!!!");
            console.log(this.pets);
            this.clicked = false;
            console.log("clicked2!!!!!!");
        }
        if (sort === 'like' && this.clicked == false) {
            this.pets = this.pets.sort(this.sortByLike);
            console.log(this.pets);
            this.clicked = true;
        }
        else if (sort === 'like' && this.clicked == true) {
            this.pets = this.pets.sort(this.sortByLike);
            var a = this.pets.reverse();
            this.pets = a;
            console.log("sorting by LIKE!!!!!!!!!!!!!!!!!!!!!!!");
            console.log(this.pets);
            this.clicked = false;
            console.log("clicked2!!!!!!");
        }
        if (sort === 'createdAt' && this.clicked == false) {
            this.pets = this.pets.sort(function (a, b) {
                return new Date(a.createdAt).getTime() + new Date(b.createdAt).getTime();
            });
            console.log(this.pets);
            this.clicked = true;
        }
        else if (sort === 'createdAt' && this.clicked == true) {
            this.pets = this.pets.sort(function (a, b) {
                return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
            });
            console.log(this.pets);
            this.clicked = false;
        }
    };
    AllpetComponent.prototype.sortByType = function (a, b) {
        if (a.type > b.type)
            return 1;
        else if (a.type == b.type)
            return 0;
        else
            return -1;
    };
    AllpetComponent.prototype.sortByName = function (a, b) {
        if (a.name > b.name)
            return 1;
        else if (a.name == b.name)
            return 0;
        else
            return -1;
    };
    AllpetComponent.prototype.sortByLike = function (a, b) {
        if (a.like > b.like)
            return 1;
        else if (a.like == b.like)
            return 0;
        else
            return -1;
    };
    AllpetComponent.prototype.showPet = function (pet) {
        console.log("1kjahglfkjsadhflas", pet);
        this._httpService.showPet(pet);
    };
    AllpetComponent = __decorate([
        core_1.Component({
            selector: 'app-allpet',
            template: __webpack_require__("./src/app/allpet/allpet.component.html"),
            styles: [__webpack_require__("./src/app/allpet/allpet.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], AllpetComponent);
    return AllpetComponent;
}());
exports.AllpetComponent = AllpetComponent;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var allpet_component_1 = __webpack_require__("./src/app/allpet/allpet.component.ts");
var newpet_component_1 = __webpack_require__("./src/app/newpet/newpet.component.ts");
var editpet_component_1 = __webpack_require__("./src/app/editpet/editpet.component.ts");
var showpet_component_1 = __webpack_require__("./src/app/showpet/showpet.component.ts");
var routes = [
    { path: '', component: allpet_component_1.AllpetComponent },
    { path: 'new', component: newpet_component_1.NewpetComponent },
    { path: 'edit/:id', component: editpet_component_1.EditpetComponent },
    { path: 'details/:id', component: showpet_component_1.ShowpetComponent },
    { path: '**', component: allpet_component_1.AllpetComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\"\n  crossorigin=\"anonymous\">\n<!-- Latest compiled and minified JavaScript -->\n\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\"\n  crossorigin=\"anonymous\"></script>\n\n<div class=\"container\">\n  <div style=\"text-align:center\">\n    <h1>\n      Pet Shelter\n    </h1>\n\n  </div>\n\n\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var url = 'http://localhost:8000/upload';
var AppComponent = /** @class */ (function () {
    function AppComponent(_route, _router, _httpService, http) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
        this.http = http;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.goHome();
    };
    AppComponent.prototype.goHome = function () {
        this._router.navigate(['/']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            http_service_1.HttpService,
            http_1.HttpClient])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var allpet_component_1 = __webpack_require__("./src/app/allpet/allpet.component.ts");
var newpet_component_1 = __webpack_require__("./src/app/newpet/newpet.component.ts");
var editpet_component_1 = __webpack_require__("./src/app/editpet/editpet.component.ts");
var showpet_component_1 = __webpack_require__("./src/app/showpet/showpet.component.ts");
var ng2_file_upload_1 = __webpack_require__("./node_modules/ng2-file-upload/index.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                allpet_component_1.AllpetComponent,
                newpet_component_1.NewpetComponent,
                editpet_component_1.EditpetComponent,
                showpet_component_1.ShowpetComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                ng2_file_upload_1.FileUploadModule
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/editpet/editpet.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/editpet/editpet.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary homebutton\">\n  <a [routerLink]=\"['']\">Home</a>\n</button>\n<h3>Edit this pet: {{ editPet.name }}</h3>\n<img src=\"{{ editPet.profileImage }}\">\n<p> {{ pet | json }} </p>\n<!-- <p *ngIf=\"(error)\">{{error}}</p> -->\n\n\n<form (submit)=\"savePet()\">\n\n  <label>Pet name:\n    <small *ngIf=\"!(editPet.name.length > 2)\">| enter at least 3 characters</small>\n    <small *ngIf=\"!(editPet.name.length < 10)\">| name over 50 characters</small>\n  </label>\n  <input type=\"text\" class=\"form-control\" name=\"editPet.name\" [(ngModel)]=\"editPet.name\" ng-minlength=\"3\" ng-maxlength=\"10\">\n\n\n  <label>Pet type:\n    <small *ngIf=\"!(editPet.type.length > 2)\">| enter at least 3 characters</small>\n    <small *ngIf=\"!(editPet.type.length < 10)\">| type over 10 characters</small>\n  </label>\n  <input type=\"text\" class=\"form-control\" name=\"editPet.type\" [(ngModel)]=\"editPet.type\" ng-minlength=\"3\" ng-maxlength=\"10\">\n\n\n  <label>Description:\n    <small *ngIf=\"!(editPet.desc.length > 5)\">| enter at least 5 characters</small>\n    <small *ngIf=\"!(editPet.desc.length < 100)\">| description over 100 characters</small>\n  </label>\n  <textarea class=\"form-control\" rows=\"5\" name=\"editPet.desc\" [(ngModel)]=\"editPet.desc\" ng-minlength=\"5\" ng-maxlength=\"100\"></textarea>\n\n  <hr>\n\n  <label>Skills(Optional):</label>\n  <label>Skill 1:</label>\n  <input type=\"text\" class=\"form-control\" name=\"editPet.skill1\" [(ngModel)]=\"editPet.skill1\" />\n  <label>Skill 2:</label>\n  <input type=\"text\" class=\"form-control\" name=\"editPet.skill2\" [(ngModel)]=\"editPet.skill2\" />\n  <label>Skill 3:</label>\n  <input type=\"text\" class=\"form-control\" name=\"editPet.skill3\" [(ngModel)]=\"editPet.skill3\" />\n\n\n\n\n  <button class=\"btn btn-primary formbutton\" [routerLink]=\"['']\">Cancel</button>\n  <input type=\"submit\" value=\"Edit pet\" class=\"btn btn-primary formbutton\">\n</form>"

/***/ }),

/***/ "./src/app/editpet/editpet.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var EditpetComponent = /** @class */ (function () {
    function EditpetComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
    }
    EditpetComponent.prototype.ngOnInit = function () {
        this.editPet = this._httpService.pet;
        console.log("editPet!!!!!!!!!!!" + this.editPet);
    };
    EditpetComponent.prototype.savePet = function () {
        var _this = this;
        var observable = this._httpService.savePet(this.editPet);
        observable.subscribe(function (data) {
            if (data.message == "Error") {
                console.log(data["message"]);
                _this.error = "Invalid name or type or description";
            }
            else {
                _this._router.navigate(['/details/' + _this.editPet._id]);
            }
        });
    };
    EditpetComponent = __decorate([
        core_1.Component({
            selector: 'app-editpet',
            template: __webpack_require__("./src/app/editpet/editpet.component.html"),
            styles: [__webpack_require__("./src/app/editpet/editpet.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            http_service_1.HttpService])
    ], EditpetComponent);
    return EditpetComponent;
}());
exports.EditpetComponent = EditpetComponent;


/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.addPet = function (newPet) {
        console.log("<> http.service.ts <>");
        console.log("## addPet ##");
        return this._http.post('/new', newPet);
    };
    HttpService.prototype.getPets = function () {
        return this._http.get('/pets');
    };
    HttpService.prototype.showPet = function (pet) {
        console.log("at the service", pet);
        this.pet = pet;
    };
    HttpService.prototype.savePet = function (editPet) {
        this.pet = editPet;
        console.log("12341245r365246236", this.pet.error);
        return this._http.put('/pets/edit/' + this.pet._id, this.pet);
    };
    HttpService.prototype.likePet = function (pet) {
        return this._http.put('/pets/up/' + pet._id, this.pet);
    };
    HttpService.prototype.showPetById = function (pet) {
        return this._http.get('/pets/' + pet._id, this.pet);
    };
    HttpService.prototype.deletePet = function (pet) {
        return this._http.delete('/pets/remove/' + pet._id);
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "./src/app/newpet/newpet.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/newpet/newpet.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary homebutton\">\n  <a [routerLink]=\"['']\">Home</a>\n</button>\n<h3>Know of a pet needing a home?</h3>\n<p> {{ pet | json }} </p>\n\n<form (submit)=\"onSubmit()\">\n  <div class=\"container-fluid\">\n    <div class=\"row header-section\">\n      <span>Upload Pet Profile Picture</span>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-8\">\n        <div class=\"row card\">\n          <div class=\"col-sm-12\">\n            <h4>Upload Section</h4>\n            <div id=\"fileSelector\">\n              <input type=\"file\" name=\"fileUplaod\" id=\"fileUpload\" multiple ng2FileSelect [uploader]=\"uploader\">\n            </div>\n            <div>\n              <div class=\"row uploadList\" *ngFor=\"let item of uploader.queue\">\n                <div class=\"col-sm-4\">{{item.file.name}}</div>\n                <div class=\"col-sm-4\">\n                  <div class=\"progress\">\n                    <div class=\"progress-bar bg-success\" [ngStyle]=\"{'width':item.progress+'%'}\"></div>\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <button type=\"button\" class=\"btn btn-dark\" (click)=\"item.upload()\">Upload</button>\n                  <button type=\"button\" class=\"btn btn-danger\" (click)=\"item.remove()\">Cancel</button>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n\n      </div>\n\n    </div>\n  </div>\n\n  <label>Pet name:\n    <small *ngIf=\"!(newPet.name.length > 2)\">| enter at least 3 characters</small>\n    <small *ngIf=\"!(newPet.name.length < 15)\">| name over 15 characters</small>\n  </label>\n  <input type=\"text\" class=\"form-control\" placeholder=\"Enter pet name\" name=\"newPet.name\" [(ngModel)]=\"newPet.name\" ng-minlength=\"3\"\n    ng-maxlength=\"10\">\n\n  <label>Pet type:\n    <small *ngIf=\"!(newPet.type.length > 2)\">| enter at least 3 characters</small>\n    <small *ngIf=\"!(newPet.type.length < 15)\">| type over 15 characters</small>\n  </label>\n  <input type=\"text\" class=\"form-control\" placeholder=\"Enter pet type\" name=\"newPet.type\" [(ngModel)]=\"newPet.type\" ng-minlength=\"3\"\n    ng-maxlength=\"10\">\n\n\n  <label>Description:\n    <small *ngIf=\"!(newPet.desc.length > 5)\">| enter at least 5 characters</small>\n    <small *ngIf=\"!(newPet.desc.length < 100)\">| description over 100 characters</small>\n  </label>\n  <textarea class=\"form-control\" placeholder=\"Enter description\" rows=\"5\" name=\"newPet.desc\" [(ngModel)]=\"newPet.desc\" ng-minlength=\"5\"\n    ng-maxlength=\"100\"></textarea>\n\n  <hr>\n\n  <label>Skills(Optional):</label>\n  <label>Skill 1:</label>\n  <input type=\"text\" class=\"form-control\" name=\"newPet.skill1\" [(ngModel)]=\"newPet.skill1\">\n  <label>Skill 2:</label>\n  <input type=\"text\" class=\"form-control\" name=\"newPet.skill2\" [(ngModel)]=\"newPet.skill2\">\n  <label>Skill 3:</label>\n  <input type=\"text\" class=\"form-control\" name=\"newPet.skill3\" [(ngModel)]=\"newPet.skill3\">\n\n\n\n\n\n\n\n\n\n  <!-- <img [src]=\"url\" height=\"200\">\n\n<label>Upload a picture</label>\n<input type=\"file\" (change)=\"onFileSelected($event)\" name=\"profileImage\"> -->\n\n\n\n\n\n\n  <button class=\"btn btn-primary formbutton\" [routerLink]=\"['']\">Cancel</button>\n  <input type=\"submit\" value=\"Add pet\" class=\"btn btn-primary formbutton\">\n\n</form>\n\n<!-- <img [src]=\"url\" height=\"200\">\n  \n  <label>Upload a picture</label>\n  <input type=\"file\" (change)=\"onFileSelected($event)\" name=\"profileImage\">\n  <button (click) = \"uploadFile()\">Upload</button> -->"

/***/ }),

/***/ "./src/app/newpet/newpet.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var ng2_file_upload_1 = __webpack_require__("./node_modules/ng2-file-upload/index.js");
var url = "http://localhost:8000/upload";
var NewpetComponent = /** @class */ (function () {
    function NewpetComponent(_route, _router, _httpService, http) {
        var _this = this;
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
        this.http = http;
        this.uploader = new ng2_file_upload_1.FileUploader({ url: url });
        this.attachmentList = [];
        this.selectedFile = null;
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log(_this.uploader);
            _this.attachmentList.push(JSON.parse(response));
            _this.newPet.profileImage = "../assets/upload/" + _this.attachmentList[0].uploadname;
            _this.attachmentList = [];
            console.log("*******************");
            console.log(_this.newPet);
        };
    }
    NewpetComponent.prototype.ngOnInit = function () {
        console.log("xX_ newpet.component.ts _Xx");
        this.newPet = {
            name: "",
            type: "",
            desc: "",
            skill1: "",
            skill2: "",
            skill3: "",
            like: 0,
            profileImage: ""
        };
    };
    // onFileSelected(event){
    //   this.selectedFile = event.target.files[0];
    //   // if (event.target.files && event.target.files[0]) {
    //   //   var reader = new FileReader();
    //   //   reader.readAsDataURL(event.target.files[0]);
    //   //   reader.onload = (event:any) => {
    //   //     console.log(event)
    //   //     this.url = event.target.result
    //   //     console.log(this.url)
    //   //   }
    //   // }
    // }
    // uploadFile(){
    //   const fd = new FormData();
    //   fd.append('image', this.selectedFile, this.selectedFile.name)
    //   let observable = this._httpService.upload(this.selectedFile)
    //   observable.subscribe(data => {
    //   })
    // }
    NewpetComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("## onSubmit ##");
        var observable = this._httpService.addPet(this.newPet);
        // let obs = this._httpService.showPetById(this.newPet)
        console.log("clicked", this.newPet);
        observable.subscribe(function (data) {
            if (data.message == "Error") {
                console.log("## There was an error adding pet ##");
                _this.error = "Invalid name or type or description";
            }
            else {
                console.log("## there was NOT an error ##");
                _this._router.navigate(['']);
            }
        });
    };
    NewpetComponent = __decorate([
        core_1.Component({
            selector: 'app-newpet',
            template: __webpack_require__("./src/app/newpet/newpet.component.html"),
            styles: [__webpack_require__("./src/app/newpet/newpet.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            http_service_1.HttpService,
            http_1.HttpClient])
    ], NewpetComponent);
    return NewpetComponent;
}());
exports.NewpetComponent = NewpetComponent;


/***/ }),

/***/ "./src/app/showpet/showpet.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showpet/showpet.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary homebutton\">\n    <a [routerLink]=\"['']\">Home</a>\n</button>\n<h3>Details about {{ pet.name }}</h3>\n<img src=\"{{ pet.profileImage }}\">\n\n<p>{{ pet.name }} is a {{ pet.type }}</p>\n<p>Description: {{ pet.desc }}</p>\n\n<p *ngIf=\"(pet.skill1)\">Skills: {{ pet.skill1 }}</p>\n<p *ngIf=\"(pet.skill2)\">Skills: {{ pet.skill2 }}</p>\n<p *ngIf=\"(pet.skill3)\">Skills: {{ pet.skill3 }}</p>\n\n<p>Likes: {{ pet.like }}</p>\n\n\n<button class=\"btn btn-primary\" (click)=\"likePet(pet)\" [disabled]='clicked'>Like this pet</button>\n\n<button class=\"btn btn-primary\" (click)=\"deletePet(pet)\">Adopt this pet!</button>"

/***/ }),

/***/ "./src/app/showpet/showpet.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var ShowpetComponent = /** @class */ (function () {
    function ShowpetComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
        this.clicked = false;
    }
    ShowpetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pet = this._httpService.pet;
        var observable = this._httpService.showPetById(this.pet);
        observable.subscribe(function (data) {
            _this.pet = data["data"];
        });
    };
    ShowpetComponent.prototype.likePet = function (pet) {
        var _this = this;
        var observable = this._httpService.likePet(this.pet);
        observable.subscribe(function (data) {
            console.log(data);
            if (data["message"] == "Success") {
                _this.clicked = true;
                _this.ngOnInit();
            }
        });
    };
    ShowpetComponent.prototype.deletePet = function (pet) {
        var _this = this;
        var observable = this._httpService.deletePet(pet);
        observable.subscribe(function (data) {
            _this._router.navigate(['/']);
        });
    };
    ShowpetComponent = __decorate([
        core_1.Component({
            selector: 'app-showpet',
            template: __webpack_require__("./src/app/showpet/showpet.component.html"),
            styles: [__webpack_require__("./src/app/showpet/showpet.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            http_service_1.HttpService])
    ], ShowpetComponent);
    return ShowpetComponent;
}());
exports.ShowpetComponent = ShowpetComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map