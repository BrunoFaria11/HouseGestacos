import { Component, Input, OnInit } from '@angular/core';

interface ServiceItemProps {
  image: string;
  title: string;
  subTitle: string;
}

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.scss']
})



export class ServiceItemComponent implements OnInit {

  @Input() props!: ServiceItemProps;

  constructor() { }

  ngOnInit(): void {
  }

}
