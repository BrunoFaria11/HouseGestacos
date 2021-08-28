import { Component, Input, OnInit } from '@angular/core';


interface HistoryItemProps {
  image: string;
  title: string;
  date: string;
  text: string;
}

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.scss']
})
export class HistoryItemComponent implements OnInit {

  @Input() props!: HistoryItemProps;

  constructor() { }

  ngOnInit(): void {
  }

}
