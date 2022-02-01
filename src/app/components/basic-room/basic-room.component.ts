import { Component, Input, OnInit } from '@angular/core';

interface BasicRoomProps {
  image: string;
  title: string;
}

@Component({
  selector: 'app-basic-room',
  templateUrl: './basic-room.component.html',
  styleUrls: ['./basic-room.component.scss']
})
export class BasicRoomComponent implements OnInit {

  @Input() props!: BasicRoomProps;

  constructor() { }

  ngOnInit(): void {
  }

}
