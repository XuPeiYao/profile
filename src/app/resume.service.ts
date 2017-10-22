import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ResumeService {
  private cache: any;
  constructor(private http: Http) { }

  public async getResume(): Promise<any> {
    return new Promise<any>((res, rej) => {
      if (this.cache) {
        res(this.cache);
        return;
      }
      this.http
        .get('assets/resume.json')
        .map(x => x.json())
        .subscribe(x => {
          this.cache = x;
          res(x);
        });
    });
  }
}
