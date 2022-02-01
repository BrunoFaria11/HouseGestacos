import { Component, Injectable, Input, OnInit } from '@angular/core';
import {
  faMapPin,
  faPhone,
  faCloudSun,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import { WebsiteDataStoreService } from 'src/app/core/services/store/website-data-store.service';

@Component({
  selector: 'app-info-nav-bar',
  templateUrl: './info-nav-bar.component.html',
  styleUrls: ['./info-nav-bar.component.scss'],
})

export class InfoNavBarComponent implements OnInit {
  @Input() languages!: any[];

  icons = {
    faMapPin: faMapPin,
    faPhone: faPhone,
    faCloudSun: faCloudSun,
    faArrowDown: faAngleDown,
  };

  constructor(public WebsiteStore: WebsiteDataStoreService) {
  }

  changeLanguage(id: number) {
    this.WebsiteStore.changeLanguage(id);
  }

  ngOnInit(): void {
  }
}
