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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
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
            new app_section_1.Section("volunteer-work", "志工", "icon-child"),
            new app_section_1.Section("publications", "作品", "icon-newspaper"),
            new app_section_1.Section("interests", "興趣", "icon-heart"),
            new app_section_1.Section("references", "推薦", "icon-thumbs-up")
        ];
        this.sectionMapping = {
            "about": ["basics", "summary"],
            "work-experience": ["work"],
            "volunteer-work": ["volunteer"]
        };
        (() => __awaiter(this, void 0, void 0, function* () {
            this.resume = yield this.downloadJSON(http, 'assets/resume.json');
            document.title = this.resume.basics.name;
            this.sections.forEach(item => {
                var contentPath = [item.id];
                if (this.sectionMapping[item.id]) {
                    contentPath = this.sectionMapping[item.id];
                }
                item.content = this.getProperty(this.resume, contentPath);
            });
        }))();
    }
    get enableSections() {
        var result = this.sections.filter(x => {
            if (Array.isArray(x.content)) {
                return x.content.length;
            }
            else {
                return x.content != null && x.content.length;
            }
        });
        return result;
    }
    downloadJSON(http, url) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((res, rej) => {
                http.get(url).subscribe(response => res(response.json()));
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