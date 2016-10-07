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
let BasicDataPanelComponent = class BasicDataPanelComponent {
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
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], BasicDataPanelComponent.prototype, "resume", void 0);
BasicDataPanelComponent = __decorate([
    core_1.Component({
        selector: 'app-components-basicDataPanel',
        templateUrl: 'app/templates/app-components-basicDataPanel.html'
    }), 
    __metadata('design:paramtypes', [])
], BasicDataPanelComponent);
exports.BasicDataPanelComponent = BasicDataPanelComponent;
//# sourceMappingURL=app.components.basicDataPanel.js.map