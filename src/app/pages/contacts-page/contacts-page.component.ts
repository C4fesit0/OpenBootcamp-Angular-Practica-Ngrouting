import { Component, OnInit } from '@angular/core';
import { IContact } from '../../models/contact.interface';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {
  filtroSexo: string='todos';
  listaDeContactos: IContact[]=[];

 

  constructor(private router: Router, private route:ActivatedRoute,private contactService: ContactService) { }


  ngOnInit(): void {
    //Obtenemmos los query params
    this.route.queryParams.subscribe((params:any)=> {
      if(params.sexo){
        this.filtroSexo= params.sexo;
        console.log(params.sexo)
      }
      //Obtenemos la lista de contactos 
      this.contactService.obtenerContactos(this.filtroSexo)?.then(
        (lista)=> this.listaDeContactos=lista
      ).catch( (error)=> console.log(`Ha habido un error al obtener los contactos: ${error}`))
      .finally(()=> console.info('Peticion de contactos terminada'))

    })

  }

  // Ejemplo de paso de informacion entre componentes a traves del estado

  volverAHome(contacto: IContact){
    let navigationExtras: NavigationExtras = {
      state:{
        data: contacto
      }
    }
    this.router.navigate(['/home'], navigationExtras);
  }

}
