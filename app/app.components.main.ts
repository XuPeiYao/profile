declare var webFontInit:Function;
import { Component, AfterContentInit } from '@angular/core';
import { Http } from '@angular/http';
import { Section }from './app.section'

@Component({
  selector: 'app-components-main',
  templateUrl: 'app/templates/app-components-main.html'
})
export class MainComponent implements AfterContentInit {
  /**
   * 履歷資訊JSON物件
   */
  public resume: any; 

  public sections : Section[] =[
      new Section("about","簡介","icon-board"),
      new Section("work-experience","工作經歷","icon-office"),
      new Section("skills","技能","icon-tools"),
      new Section("education","學歷","icon-graduation-cap"),
      new Section("awards","獎項","icon-trophy"),
      new Section("publications","作品","icon-newspaper"),
      new Section("interests","興趣","icon-heart")
  ];

  private sectionMapping = {
    "about":["basics","summary"],
    "work-experience":["work"]
  }

  constructor(http : Http){
    //獲取履歷JSON
    http.get('assets/resume.json').subscribe(x=>{
      this.resume = x.json();
      this.sections.forEach(item=>{
        var contentPath = [item.id];
        if(this.sectionMapping[item.id]){
          contentPath = this.sectionMapping[item.id];
        }
        item.content = this.getProperty(this.resume,contentPath);
      });
    });
  }

  public getProperty(obj: any,path:string[]):any{
    var result = obj;
    for(var i = 0 ; i < path.length ; i++){
      result = result[path[i]];
    }
    return result;
  }

  public ngAfterContentInit() : void{
    webFontInit();
  }
}