import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  currentStep = 1;
  form!: FormGroup;
  form1!: FormGroup;
  isForm1Valid = false;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      role: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    });

    this.form1 = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      verifypassword: ['', Validators.required]
    });

    this.form1.valueChanges.subscribe(() => {
      this.isForm1Valid = this.form1.valid;
    });

  }



  ngOnInit(): void {
    
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    
  }
}
