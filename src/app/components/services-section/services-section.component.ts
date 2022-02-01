import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss']
})
export class ServicesSectionComponent implements OnInit {
  @Input() services!: any;
  @Input() paddingTop!: any;

  constructor() { }
  
  assetsPath = environment.assetsPath;

  ngOnInit(): void {
    
  }

}
