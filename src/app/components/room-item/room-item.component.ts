import { Component, Input, OnInit } from '@angular/core';

interface RoomItemProps {
  images: string[];
  title: string;
  position: "left" | "right";
}

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.scss']
})
export class RoomItemComponent implements OnInit {

  @Input() props!: RoomItemProps;

  constructor() { }

  ngOnInit(): void {
  }

}
