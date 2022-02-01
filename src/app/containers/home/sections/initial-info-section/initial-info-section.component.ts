import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial-info-section',
  templateUrl: './initial-info-section.component.html',
  styleUrls: ['./initial-info-section.component.scss'],
})
export class InitialInfoSectionComponent implements OnInit {
  @Input() WebsiteData!: any;

  constructor() {}

  ngOnInit(): void {}
  ngOnChanges() {
    console.log(this.WebsiteData);
  }
}
