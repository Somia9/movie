import { Component } from '@angular/core';
import { FormGroup ,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  constructor(private _AuthService:AuthService ,private _Router:Router){}
  isLoading:boolean=false;

  errorMessage:string='';
   registerForm:FormGroup= new FormGroup(
  {
    first_name:new FormControl(null ,[Validators.required ,Validators.minLength(3) ,Validators.maxLength(10)]),
    last_name:new FormControl(null ,[Validators.minLength(3) ,Validators.maxLength(10) ,Validators.required ]),
    email :new FormControl(null ,[Validators.required ,Validators.email]),
    age:new FormControl(null ,[Validators.required ,Validators.min(16) ,Validators.max(80)]),
    password:new FormControl(null ,[Validators.required ,Validators.pattern('^[A-Z][a-z]{3,8}$')]),
  })

  submitRegisterForm(registerForm:FormGroup){
    this.isLoading=true;
    if (registerForm.valid) {
      this._AuthService.signup(registerForm.value).subscribe({

        next:(response)=>{

          if (response.message ==='success') {
            this.isLoading=false;

            this._Router.navigate(['/login'])

          } else {
            this.isLoading=false;

            this.errorMessage=response.message

          }

        }

       })
    }

  }

}
