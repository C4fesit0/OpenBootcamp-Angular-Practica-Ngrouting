import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router'; 
import { IContact } from '../../models/contact.interface';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  token: string | null= null;
  contactoSeleccionado: IContact | undefined;
  constructor(private router: Router) { }

  ngOnInit(): void {
    //Comprobamos si existe el token en el sessionStorage
    this.token= sessionStorage.getItem('token');

    //Leemos el estado del historial de navegacion
    if(history.state.data){
      console.log(history.state.data);
      this.contactoSeleccionado=history.state.data;  
    }
  }
  
  navegarAContacts(): void{
    let navigationExtras: NavigationExtras = {
      queryParams: {
        filter: 'todos'
      }
    }
    this.router.navigate(['contacts'],navigationExtras); 
  }
}
