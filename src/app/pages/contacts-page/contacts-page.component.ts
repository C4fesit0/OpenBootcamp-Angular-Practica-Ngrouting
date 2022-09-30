import { Component, OnInit } from '@angular/core';
import { IContact } from '../../models/contact.interface';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { IRandomContact,Results } from '../../models/randomuser';
import { RandomUserService } from '../../services/random-user.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {
  filtroSexo: string='todos';
  listaRandomContacts: IRandomContact[]=[];

  cargando:boolean = true;


  constructor(private router: Router, private route:ActivatedRoute,
      private randomUserService: RandomUserService
    ) { }


  ngOnInit(): void {
    //Obtenemmos los query params
    this.route.queryParams.subscribe((params:any)=> {
      if(params.sexo){
        this.filtroSexo= params.sexo;
        console.log(params.sexo)
        if(params.sexo ==='female' || params.sexo==='male'){

          this.randomUserService.obtenerRandomContacts(10,params.sexo).subscribe({
            next: (response: Results)=>{
              console.log(response);
              response.results.forEach((randomContact: IRandomContact, index: number)=>{
                this.listaRandomContacts.push(randomContact);
              });
              console.log(this.listaRandomContacts);
            },
            error: (error)=> console.error(`${error}`),
            complete: ()=>{console.info('Peticion de random contact terminada')
            this.cargando=false;
          }

          });
        }else{
          //Implementacion para obtener la lista de contactos aleatorios
        this.randomUserService.obtenerRandomContacts(10).subscribe({
          next: (response: Results)=>{
            console.log(response);
            response.results.forEach((randomContact: IRandomContact, index: number)=>{
              this.listaRandomContacts.push(randomContact);
            });
            console.log(this.listaRandomContacts);
          },
          error: (error)=> console.error(`${error}`),
          complete: ()=>{
            console.info('Peticion de random contact terminada')
          this.cargando=false;
        }
        });
        }
      }


    });


  }

  // Ejemplo de paso de informacion entre componentes a traves del estado
  volverAHome(contacto: IRandomContact){
    let navigationExtras: NavigationExtras = {
      state:{
        data: contacto
      }
    }
    this.router.navigate(['/dashboard'], navigationExtras);
  }

}
