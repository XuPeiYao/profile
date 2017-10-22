import { Component, OnInit, Input } from '@angular/core';
import { ResumeService } from '../../resume.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  @Input() profile;
  constructor(private resumeService: ResumeService) { }

  async ngOnInit() {
    this.profile = await this.resumeService.getResume();
  }
}
