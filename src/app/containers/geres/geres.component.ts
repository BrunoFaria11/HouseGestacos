import { Component, OnInit } from '@angular/core';
import { WebsiteDataStoreService } from 'src/app/core/services/store/website-data-store.service';

@Component({
  selector: 'app-geres',
  templateUrl: './geres.component.html',
  styleUrls: ['./geres.component.scss']
})
export class GeresComponent implements OnInit {

  constructor(public WebsiteStore: WebsiteDataStoreService) { }

  ngOnInit(): void {
    
  }

}
