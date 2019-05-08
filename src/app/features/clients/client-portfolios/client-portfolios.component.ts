import { Component, OnInit } from '@angular/core';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-client-portfolios',
  templateUrl: './client-portfolios.component.html',
  styleUrls: ['./client-portfolios.component.scss']
})
export class ClientPortfoliosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tiles: Tile[] = [
    {text: 'Mens', cols: 2, rows: 1, color: 'cyan'},
    {text: 'Menprofiles', cols: 1, rows: 1, color: 'white'},
    {text: 'Womens profiles', cols: 2, rows: 1, color: 'white'},
    {text: 'Womens', cols: 1, rows: 1, color: 'red'},
  ];

  

}
