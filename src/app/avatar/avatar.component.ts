import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() width = 150;
  @Input() height = 150;
  constructor() { }

  ngOnInit() {
  }
}
