import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-section',
  templateUrl: './gallery-section.component.html',
  styleUrls: ['./gallery-section.component.scss']
})
export class GallerySectionComponent implements OnInit {
  @Input() WebsiteData!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
