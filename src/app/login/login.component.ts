import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isLoading:boolean=false;

  constructor(private _AuthService:AuthService ,private _Router:Router){};
  errorMessage:string='';
  loginForm:FormGroup =new FormGroup({
    email:new FormControl(null ,[Validators.required ,Validators.email]),
    password:new FormControl(null ,[Validators.required ,Validators.pattern('^[A-Z][a-z]{3,8}$')])
  });

  submitLoginForm(loginForm:FormGroup){
    this.isLoading=true;

    this._AuthService.signin(loginForm.value).subscribe({


    next:(response)=>{



      if (response.message =='success') {

        this.isLoading=false,
        localStorage.setItem('userData',response.token),
        // console.log(response.token),
        this._AuthService.saveUserData()

       this._Router.navigate(['/home'])

      } else {
        this.isLoading=false,

        this.errorMessage = response.message

      }

    }




    })


  }

}
