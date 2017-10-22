import { Component, OnInit, Input } from '@angular/core';
import { ResumeService } from '../../resume.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @Input() profile;
  constructor(private resumeService: ResumeService) { }

  async ngOnInit() {
    this.profile = await this.resumeService.getResume();
  }
}
