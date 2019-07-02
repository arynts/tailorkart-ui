import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { RegisterComponent } from '../../features/customers/register/register.component';
import { CustomerLoginComponent } from '../../features/customers/customer-login/customer-login.component';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog) {}

  openDialog(): void{
    const dialogRef = this.dialog.open(RegisterComponent,{width: "500px"});

    dialogRef.afterClosed().subscribe(result => {
      console.log('the dialog was closed');
    });
  }

  openMobileDialog(): void{
    const dialogRef = this.dialog.open(CustomerLoginComponent,{width: "160%"})
  }


}
