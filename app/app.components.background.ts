import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-components-background',
  templateUrl: 'app/templates/app-components-background.html'
})
export class BackgroundComponent {
  @Input()
  public resume:any;

  @Input()
  public title:string = "Background";
}