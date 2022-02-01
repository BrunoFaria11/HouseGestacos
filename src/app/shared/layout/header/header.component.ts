import { Component, Injectable, Input, OnInit } from '@angular/core';
import { WebsiteDataStoreService } from 'src/app/core/services/store/website-data-store.service';
import {
  faBars,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
@Injectable()
export class HeaderComponent implements OnInit {
  @Input() websiteData!: any;

  icons = {
    faBars: faBars,
    faArrowRight:faArrowRight
  };
  constructor(public WebsiteStore: WebsiteDataStoreService) {}

  ngOnInit(): void {}
}
