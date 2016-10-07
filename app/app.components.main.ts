declare var toggleInit : Function, webFontInit:Function;
import { Component, AfterContentInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-components-main',
  templateUrl: 'app/templates/app-components-main.html'
})
export class MainComponent implements AfterContentInit {
  /**
   * 履歷資訊JSON物件
   */
  public resume: any; 

  /**
   * 取得地址資訊字串表示 
   */
  public get locationString():string{
    if(!this.resume)return null;
    function checkAndPush(ary:Array<string>,value:string){
      if(value != null && value.length > 0)ary.push(value);
    }
    var result = [];
    var location = this.resume.basics.location;
    checkAndPush(result,location.address);
    checkAndPush(result,location.city);
    checkAndPush(result,location.countryCode);
    checkAndPush(result,location.postalCode);
    checkAndPush(result,location.region);
    return result.join(", ");
  }

  /**
   * 取得使用者語言字串表示
   */
  public get languagesString():string{
    if(!this.resume)return null;
    return this.resume.languages.map(x=>x.language).join(", ");
  }

  constructor(http : Http){
    //獲取履歷JSON
    http.get('assets/resume.json').subscribe(x=>{
      this.resume = x.json();
    });
  }

  public ngAfterContentInit() : void{
    toggleInit();
    webFontInit();
  }
}