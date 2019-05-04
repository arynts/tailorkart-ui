import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'One', cols: 4, rows: 1, color: 'lightblue'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
