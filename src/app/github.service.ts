import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GithubService {
  constructor(private http: Http) { }

  public async getAllRepos(): Promise<any> {
    let result = [];
    for (let page = 1 ; ; page++) {
      const list = await this.getReposByPage(page);
      if (list.length === 0) {
        break;
      }
      result = result.concat(list);
    }
    return result;
  }

  public async getReposByPage(page: number): Promise<any> {
    return new Promise<any>((res, rej) => {
      this.http
        .get('https://api.github.com/users/XuPeiYao/repos?page=' + page)
        .map(x => x.json())
        .subscribe(x => {
          res(x);
        });
    });
  }
}
