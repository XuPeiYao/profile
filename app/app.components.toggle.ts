declare var toggleInit : Function;
import { Component, Input, AfterContentInit } from '@angular/core';
@Component({
    selector: 'app-components-toggle',
    templateUrl: 'app/templates/app-components-toggle.html'
})
export class ToggleComponent implements AfterContentInit {
    @Input()
    public items: ToggleItem[];

    public ngAfterContentInit(): void {
        toggleInit();
    }
}

export class ToggleItem{
    constructor(
        public text:string,
        public icon:string,
        public tag:string){}
}