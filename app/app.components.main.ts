declare var webFontInit:Function;
import { Component, AfterContentInit } from '@angular/core';
import { Http } from '@angular/http';
import {ToggleItem }from './app.components.toggle'

@Component({
  selector: 'app-components-main',
  templateUrl: 'app/templates/app-components-main.html'
})
export class MainComponent implements AfterContentInit {
  /**
   * 履歷資訊JSON物件
   */
  public resume: any; 

  public toggleItems : ToggleItem[] =[
      new ToggleItem("簡介","icon-board","#about"),
      new ToggleItem("工作經歷","icon-office","#work-experience"),
      new ToggleItem("技能","icon-tools","#skills"),
      new ToggleItem("學歷","icon-graduation-cap","#education"),
      new ToggleItem("獎項","icon-trophy","#awards"),
      new ToggleItem("作品","icon-newspaper","#publications"),
      new ToggleItem("興趣","icon-heart","#interests")
  ];

  constructor(http : Http){
    //獲取履歷JSON
    http.get('assets/resume.json').subscribe(x=>{
      this.resume = x.json();
    });
  }

  public ngAfterContentInit() : void{
    webFontInit();
  }
}