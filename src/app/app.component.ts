import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  profile;

  constructor(private http: Http) {

  }

  ngOnInit(): void {
    this.http.get('assets/resume.json').subscribe(x => {
      this.profile = x.json();
    });
  }
}
