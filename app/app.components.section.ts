import { Section } from './app.section';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-components-section',
  templateUrl: 'app/templates/app-components-section.html'
})
export class SectionComponent {
  @Input()
  public content:any;
}