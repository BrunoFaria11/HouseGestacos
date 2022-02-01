import { Component, Input, OnInit } from '@angular/core';
import { WebsiteDataStoreService } from 'src/app/core/services/store/website-data-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(public WebsiteStore: WebsiteDataStoreService) {}

  ngOnInit(): void {}
}
