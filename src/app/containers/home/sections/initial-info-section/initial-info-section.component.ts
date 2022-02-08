import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-initial-info-section',
  templateUrl: './initial-info-section.component.html',
  styleUrls: ['./initial-info-section.component.scss'],
})
export class InitialInfoSectionComponent implements OnInit {
  @Input() WebsiteData!: any;
  FTP_HOST: string =  environment.cm_ftp_images;
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges() {
    console.log(this.WebsiteData);
  }
}
