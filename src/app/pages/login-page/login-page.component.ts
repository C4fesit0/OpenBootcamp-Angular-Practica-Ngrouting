import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {

    let token = sessionStorage.getItem('token');
    if(token){
      this.router.navigate(['home']);
    }

  }

  loginUser(value:any):void{
    let {email,password}=value;

    this.auth.login(email,password)
      .subscribe((response) =>{
        console.log(response)
        if(response.token){

          sessionStorage.setItem('token',response.token);
          this.router.navigate(['']);
        }
      },
      (error)=>{
        console.error(error)
      },
      ()=> console.log("Peticion de login terminada")
      )

    //sessionStorage.setItem('token', '123456789');
    this.router.navigate(['']);
  }

}
