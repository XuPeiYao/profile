import { Component, OnInit, Input } from '@angular/core';
import { ResumeService } from '../../resume.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() profile;
  constructor(private resumeService: ResumeService) { }

  async ngOnInit() {
    this.profile = await this.resumeService.getResume();
  }

}
