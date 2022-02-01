import { Component, OnInit } from '@angular/core';
import { WebsiteDataStoreService } from 'src/app/core/services/store/website-data-store.service';

@Component({
  selector: 'app-banner-section',
  templateUrl: './banner-section.component.html',
  styleUrls: ['./banner-section.component.scss']
})
export class BannerSectionComponent implements OnInit {

  constructor(public WebsiteStore: WebsiteDataStoreService) { }

  ngOnInit(): void {
  }

}
