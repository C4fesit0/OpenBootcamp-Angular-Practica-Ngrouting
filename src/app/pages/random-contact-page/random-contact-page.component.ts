import { Component, Input, OnInit } from '@angular/core';
import { RandomUserService } from '../../services/random-user.service';
import { Results, IRandomContact } from '../../models/randomuser';
@Component({
  selector: 'app-random-contact-page',
  templateUrl: './random-contact-page.component.html',
  styleUrls: ['./random-contact-page.component.scss']
})
export class RandomContactPageComponent implements OnInit {
  contact : IRandomContact | undefined;


  constructor(private randomUserService: RandomUserService) { }

  ngOnInit(): void {
    this.randomUserService.obtenerRandomContact().subscribe((response: Results)=>{
      this.contact = response.results[0];  //Se lo pasaremos al random contact
    })
  }

  obtenerNuevoContacto(){
    /* this.randomUserService.obtenerRandomContact().subscribe(
    (response: Results)=>{
      this.contact = response.results[0];  //Se lo pasaremos al random contact
    },
    (error)=>{
      console.error(`Error: ${error}`)
    }); */

    this.randomUserService.obtenerRandomContact().subscribe(
      {
        next: (response: Results)=>{
          this.contact = response.results[0];
        },
        error: (error)=> console.error(`${error}`),
        complete: ()=>console.info('Peticion de random contact terminada')
      }
    )

  }

  obtenerListaContactos(n: number){
    this.randomUserService.obtenerRandomContacts(n).subscribe({
      next: (response: Results)=>{
        console.log(response);
      },
      error: (error)=> console.error(`${error}`),
      complete: ()=>console.info('Peticion de random contact terminada')
    })
  }

}
