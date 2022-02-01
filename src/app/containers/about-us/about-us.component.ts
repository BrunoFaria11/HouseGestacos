import { Component, OnInit } from '@angular/core';
import { WebsiteDataStoreService } from 'src/app/core/services/store/website-data-store.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(public WebsiteStore: WebsiteDataStoreService) { }

  ngOnInit(): void {
  }

}
