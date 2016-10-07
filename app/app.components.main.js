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
const app_components_toggle_1 = require('./app.components.toggle');
let MainComponent = class MainComponent {
    constructor(http) {
        this.toggleItems = [
            new app_components_toggle_1.ToggleItem("簡介", "icon-board", "#about"),
            new app_components_toggle_1.ToggleItem("工作經歷", "icon-office", "#work-experience"),
            new app_components_toggle_1.ToggleItem("技能", "icon-tools", "#skills"),
            new app_components_toggle_1.ToggleItem("學歷", "icon-graduation-cap", "#education"),
            new app_components_toggle_1.ToggleItem("獎項", "icon-trophy", "#awards"),
            new app_components_toggle_1.ToggleItem("作品", "icon-newspaper", "#publications"),
            new app_components_toggle_1.ToggleItem("興趣", "icon-heart", "#interests")
        ];
        //獲取履歷JSON
        http.get('assets/resume.json').subscribe(x => {
            this.resume = x.json();
        });
    }
    ngAfterContentInit() {
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