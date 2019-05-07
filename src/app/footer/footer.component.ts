import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'One', cols: 4, rows: 1, color: 'lightblue'}
  ]; 

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('whatsapp',
    sanitizer.bypassSecurityTrustResourceUrl('assets/images/whatsapp_icon.svg'));
    iconRegistry.addSvgIcon('appstoreBadge',sanitizer.bypassSecurityTrustResourceUrl('assets/images/social/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg'));
   }

  ngOnInit() {
  }

}
