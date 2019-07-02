import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from '../../../application-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.scss']
})
export class CustomerLoginComponent implements OnInit {
  public isMobileResolution: boolean;

  constructor(private applicationStateService: ApplicationStateService, private router:Router) { 
    this.isMobileResolution = this.applicationStateService.getIsMobileResolution();
  }

  ngOnInit() {
  }

}
