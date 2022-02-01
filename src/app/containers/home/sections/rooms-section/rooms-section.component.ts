import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms-section',
  templateUrl: './rooms-section.component.html',
  styleUrls: ['./rooms-section.component.scss']
})
export class RoomsSectionComponent implements OnInit {
  @Input() WebsiteData!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
