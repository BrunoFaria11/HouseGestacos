import { Component, Input, OnInit } from '@angular/core';

interface  AdditionalInfoSectionProps {
  title: string;
  sub_title: string;
  button:string;
}

@Component({
  selector: 'app-additional-info-section',
  templateUrl: './additional-info-section.component.html',
  styleUrls: ['./additional-info-section.component.scss']
})

export class AdditionalInfoSectionComponent implements OnInit {
  @Input() props!: AdditionalInfoSectionProps;

  constructor() { }

  ngOnInit(): void {
  }

}
