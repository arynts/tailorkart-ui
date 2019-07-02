import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { ApplicationStateService } from './application-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AMT';
  public isMobileResolution: boolean;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer,
  private applicationStateService: ApplicationStateService){
    this.matIconRegistry.addSvgIcon(
      'facebook2',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/social/facebook2.svg"),
    );

    this.isMobileResolution = this.applicationStateService.getIsMobileResolution();
  }
}
