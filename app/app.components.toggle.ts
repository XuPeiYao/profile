declare var toggleInit : Function;
import { Section } from "./app.section";
import { Component, Input, AfterContentInit } from '@angular/core';
@Component({
    selector: 'app-components-toggle',
    templateUrl: 'app/templates/app-components-toggle.html'
})
export class ToggleComponent implements AfterContentInit {
    @Input()
    public items: Section[];

    public ngAfterContentInit(): void {
        toggleInit();
    }
}