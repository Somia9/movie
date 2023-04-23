import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  islogin:boolean=false;
  userInfo:any={};
  constructor(private _AuthService:AuthService){};

  logOut()
  {
    this._AuthService.signOut();
  }

  ngOnInit(): void {

this._AuthService.userData.subscribe({

  next:()=>{
    if (this._AuthService.userData.getValue() !=null) {

      this.userInfo=this._AuthService.userData.getValue()
      // console.log(this.userInfo);
      this.islogin=true;

    } else {
      this.islogin=false;
    }
  }

})


  }

}
