import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-components-basicDataPanel',
  templateUrl: 'app/templates/app-components-basicDataPanel.html'
})
export class BasicDataPanelComponent {
  @Input()
  public resume:any;

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
}