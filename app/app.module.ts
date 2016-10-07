import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent }   from './app.components.main';
import { BasicDataPanelComponent} from './app.components.basicDataPanel';
import { HttpModule } from '@angular/http';
@NgModule({
  imports:      [
     BrowserModule,
     HttpModule  
  ],
  declarations: [ MainComponent,BasicDataPanelComponent ],
  bootstrap:    [ MainComponent ]
})
export class AppModule { }