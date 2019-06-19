import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../../login/login.component';
import { RegisterComponent } from '../../register/register.component';
import { VideodemoComponent } from '../../../common/videodemo/videodemo.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client-portfolios',
  templateUrl: './client-portfolios.component.html',
  styleUrls: ['./client-portfolios.component.scss']
})
export class ClientPortfoliosComponent implements OnInit {

  public data: any;
  public demoBox: any;

  constructor(public dialog: MatDialog, private http: HttpClient) { }

  ngOnInit(): void {
      this.http.get("./assets/clientportfolio.json",{responseType: "json"}).subscribe(
        response =>{
          this.data = response;
          console.log("response :"+response);
          var sample=JSON.stringify(response);
        }
      );
      this.demoBox = "Discover Flawless perfect fit for your unique figure. Your confidence reflects with our perfect fitting. Our skilled proffesionals will make your wardrobe with eligent and stylish look. Allow us to assit your thoughts at your door step.";
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(VideodemoComponent,{width: "700px"});
    dialogRef.afterClosed().subscribe(result => {
      console.log('the dialog was closed');
    });
  }

}
