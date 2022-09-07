import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  email: string='';
  password: string='';
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {

    let token = sessionStorage.getItem('token');
    if(token){
      this.router.navigate(['home']);
    }

  }

  loginUser():void{
    console.log(this.email);
    console.log(this.password);

    this.auth.login(this.email, this.password)
      .subscribe((response) =>{
        console.log(response)
        if(response.token){
          
          sessionStorage.setItem('token',response.token);
          this.router.navigate(['/home']);
        }
      },
      (error)=>{
        console.error(error)
      },
      ()=> console.log("Peticion de login terminada")
      )

    //sessionStorage.setItem('token', '123456789');
    this.router.navigate(['contacts']);
  }

}
