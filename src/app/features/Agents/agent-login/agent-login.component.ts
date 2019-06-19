import { Component, OnInit } from '@angular/core';
import { ValidationErrors, FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentLoginBean } from './_bean/agentLoginBean';
import { AgentLoginService } from './_service/agent-login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agent-login',
  templateUrl: './agent-login.component.html',
  styleUrls: ['./agent-login.component.scss']
})
export class AgentLoginComponent implements OnInit {
  agentLoginForm;
  agentDtlsFormGroup;
  addressDtlsFormGroup;
  public newRegistration:boolean = false;
  public agentLogin:boolean = true;
  username: string;
  password: string;
  submitted = false;
  str: string;
  public formdata: any;
  countryData: any;
  cityData: any;
  stateData: any;

  constructor(private _formBuilder: FormBuilder, private router: Router, private http: HttpClient, private agentLoginService: AgentLoginService) { }
  ngOnInit() {
    this.http.get("./assets/agentlogin.json",{responseType: "json"}).subscribe(
      response =>{
        this.formdata = response;
        let res = response[0];
        let stateResp = response[1];
        let cityResp = response[2];
        this.stateData = stateResp['stateList'];
        this.countryData = res['countryList'];
        this.cityData = cityResp['cityList'];
        this.str = JSON.stringify(this.countryData);
        console.log("cities: "+JSON.stringify(this.cityData))
        console.log("response :"+response);
        console.log("Test "+this.str);
      }
    );

    this.agentLoginForm = this._formBuilder.group({
      agentLoginUsername: ['',[Validators.required, Validators.minLength(7)]],
      agentLoginPassword: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(15)]]
    });

    this.agentDtlsFormGroup = this._formBuilder.group({
      agentName: ['', [Validators.required,Validators.minLength(3)]],
      agentEmail: ['',[Validators.required, Validators.email]],
      agentPhoneNumber: [''],
      agentRegPassword: [''],
      addressLineOne: [''],
      addressLineTwo: [''],
      city: [''],
      state: [''],
      postalCode: [''],
      country: ['']
    });
   }

   onSubmit(){
    if(this.agentLoginForm.valid){
      alert('good')
      this.agentLoginService.save(this.agentLoginForm.value)
      // this.http.post('/api/login', this.agentLoginForm.value)
      .subscribe((response)=>{
        console.log('repsonse ',response);
      })
    } else {
      alert('not good')
    }
  }

  agentRegister(){
    this.newRegistration = true;
    this.agentLogin = false;
  }

  onRegisterSubmit(){
    if(this.agentDtlsFormGroup.valid){
      alert('register success-1')
      this.agentLoginService.save(this.agentDtlsFormGroup.value).subscribe(resp=>{
        console.log('success calling ---->',resp);
      });
    }else{
      alert('something went wrong')
    }
  }

  backToAgentLogin() {
    this.newRegistration = false;
    this.agentLogin = true;
  }

  // convenience getter for easy access to form fields
  get loginForm() { return this.agentLoginForm.controls; }

  //To avoid repetitive formControls,groupus we will use formbuilder
  get agentName(){return this.agentDtlsFormGroup.get('agentName');}
  get agentLoginUsername(){return this.agentLoginForm.get('agentLoginUsername');}
  get agentLoginPassword(){return this.agentLoginForm.get('agentLoginPassword');}
  get agentEmail(){return this.agentDtlsFormGroup.get('agentEmail');}
  
}
