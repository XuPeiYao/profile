import { Component, OnInit, Input } from '@angular/core';
import { ResumeService } from '../../resume.service';
import { GithubService } from '../../github.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css'],
  providers: [GithubService]
})
export class PublicationsComponent implements OnInit {
  @Input() profile;
  constructor(
    private resumeService: ResumeService,
    private githubService: GithubService
    ) { }

  async ngOnInit() {
    this.profile = await this.resumeService.getResume();
    this.profile.publications = this.profile.publications.map(x => {
        x.releaseDate = new Date(x.releaseDate);
        return x;
      }).concat(
      (await this.githubService.getAllRepos())
        .filter(x => x.stargazers_count)
        .map(x => {
          return {
            name : x.name,
            releaseDate : new Date(x.created_at),
            website: x.html_url,
            summary: x.description
          };
        })
        .sort((a: any, b: any) => {
          return b.releaseDate - a.releaseDate;
        })
    );
  }
}
