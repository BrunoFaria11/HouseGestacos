import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials-section',
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.scss']
})
export class TestimonialsSectionComponent implements OnInit {
  @Input() WebsiteData!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
