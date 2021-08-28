import { Component, Input, OnInit } from '@angular/core';
import { faMapPin, faPhone, faCloudSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info-nav-bar',
  templateUrl: './info-nav-bar.component.html',
  styleUrls: ['./info-nav-bar.component.scss']
})

export class InfoNavBarComponent implements OnInit {

  @Input() props: any;

  icons = {
    faMapPin: faMapPin,
    faPhone: faPhone,
    faCloudSun:faCloudSun
  }

  constructor() { }

  ngOnInit(): void {
    const { info1 } = this.props;

  }

}
