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
const core_1 = require('@angular/core');
const http_1 = require('@angular/http');
let MainComponent = class MainComponent {
    constructor(http) {
        //獲取履歷JSON
        http.get('assets/resume.json').subscribe(x => {
            this.resume = x.json();
        });
    }
    /**
     * 取得地址資訊字串表示
     */
    get locationString() {
        if (!this.resume)
            return null;
        function checkAndPush(ary, value) {
            if (value != null && value.length > 0)
                ary.push(value);
        }
        var result = [];
        var location = this.resume.basics.location;
        checkAndPush(result, location.address);
        checkAndPush(result, location.city);
        checkAndPush(result, location.countryCode);
        checkAndPush(result, location.postalCode);
        checkAndPush(result, location.region);
        return result.join(", ");
    }
    /**
     * 取得使用者語言字串表示
     */
    get languagesString() {
        if (!this.resume)
            return null;
        return this.resume.languages.map(x => x.language).join(", ");
    }
    ngAfterContentInit() {
        toggleInit();
        webFontInit();
    }
};
MainComponent = __decorate([
    core_1.Component({
        selector: 'app-components-main',
        templateUrl: 'app/templates/app-components-main.html'
    }), 
    __metadata('design:paramtypes', [http_1.Http])
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=app.components.main.js.map