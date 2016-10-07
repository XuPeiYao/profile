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
const app_section_1 = require('./app.section');
let MainComponent = class MainComponent {
    constructor(http) {
        this.sections = [
            new app_section_1.Section("about", "簡介", "icon-board"),
            new app_section_1.Section("work-experience", "工作經歷", "icon-office"),
            new app_section_1.Section("skills", "技能", "icon-tools"),
            new app_section_1.Section("education", "學歷", "icon-graduation-cap"),
            new app_section_1.Section("awards", "獎項", "icon-trophy"),
            new app_section_1.Section("publications", "作品", "icon-newspaper"),
            new app_section_1.Section("interests", "興趣", "icon-heart")
        ];
        this.sectionMapping = {
            "about": ["basics", "summary"],
            "work-experience": ["work"]
        };
        //獲取履歷JSON
        http.get('assets/resume.json').subscribe(x => {
            this.resume = x.json();
            this.sections.forEach(item => {
                var contentPath = [item.id];
                if (this.sectionMapping[item.id]) {
                    contentPath = this.sectionMapping[item.id];
                }
                item.content = this.getProperty(this.resume, contentPath);
            });
        });
    }
    getProperty(obj, path) {
        var result = obj;
        for (var i = 0; i < path.length; i++) {
            result = result[path[i]];
        }
        return result;
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