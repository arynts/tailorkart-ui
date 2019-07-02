import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  isSubmitted = true;
  registrationForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<RegisterComponent>, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      telephone: ['', Validators.required]
    });
  }

  get formControls(){
    return this.registrationForm.controls;
  }

  onClickCancel(): void{
    this.dialogRef.close();
  }

  onClickRegister(){
    console.log('testing--------');
    this.isSubmitted = true;
    if(this.registrationForm.invalid){
      return;
    }
  }

}
