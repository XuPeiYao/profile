import { Section } from './app.section';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-components-background',
  templateUrl: 'app/templates/app-components-background.html'
})
export class BackgroundComponent {
  @Input()
  public sections:Section[];

  @Input()
  public title:string = "Background";
}