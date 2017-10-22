import { Component, OnInit, Input } from '@angular/core';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() profile: any;

  constructor(private resumeService: ResumeService) { }

  async ngOnInit() {
    this.profile = await this.resumeService.getResume();
  }

}
