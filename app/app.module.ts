import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent }   from './app.components.main';
import { BasicDataPanelComponent} from './app.components.basicDataPanel';
import { BackgroundComponent} from './app.components.background';
import { SectionComponent} from './app.components.section';
import { ToggleComponent} from './app.components.toggle';
import { HttpModule } from '@angular/http';
@NgModule({
  imports:      [
     BrowserModule,
     HttpModule  
  ],
  declarations: [ MainComponent,BasicDataPanelComponent,BackgroundComponent,ToggleComponent,SectionComponent ],
  bootstrap:    [ MainComponent ]
})
export class AppModule { }