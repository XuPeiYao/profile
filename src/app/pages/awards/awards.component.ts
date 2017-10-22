import { Component, OnInit, Input } from '@angular/core';
import { ResumeService } from '../../resume.service';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {
  @Input() profile;
  constructor(private resumeService: ResumeService) { }

  async ngOnInit() {
    this.profile = await this.resumeService.getResume();
  }
}
