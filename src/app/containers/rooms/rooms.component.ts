import { Component, OnInit } from '@angular/core';
import { WebsiteDataStoreService } from 'src/app/core/services/store/website-data-store.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  constructor(public WebsiteStore: WebsiteDataStoreService) { 
  }

  ngOnInit(): void {
  }

}
