import { Component, Input, OnInit } from '@angular/core';

interface SectionHeaderProps {
  title: string;
  subTitle?: string;
}

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {

  constructor() { }

  @Input() props!: SectionHeaderProps;


  ngOnInit(): void {
  }

}
