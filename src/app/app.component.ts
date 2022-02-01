import { Component, Injectable } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment';
import { Store } from '@ngrx/store';
import { WebsiteDataStoreService } from './core/services/store/website-data-store.service';

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';

  assetsPath = environment.assetsPath;
  websiteData: any = {};

  constructor(
    private router: Router,
    public websiteDataStoreService: WebsiteDataStoreService
  ) {
    this.websiteDataStoreService.fetchWebsiteLanguages();
    this.websiteDataStoreService.fetchWebsiteData();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const node = document.createElement('script');
        node.src = `${this.assetsPath}/custom/js/main.js`;
        node.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(node);
      }
    });
  }

  ngOnInit() {
  }
}
