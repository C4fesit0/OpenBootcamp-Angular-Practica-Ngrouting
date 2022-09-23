import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContact } from '../../models/contact.interface';
import { IRandomContact } from '../../models/randomuser';
@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss']
})
export class ContactDetailPageComponent implements OnInit {

  filtroPrevio: string | undefined;
  id : any | undefined;
  contacto : IRandomContact| undefined;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    //Vamos a leer los parametros
    this.route.params.subscribe(
      (params:any)=> {
        if(params.id){
          this.id=params.id;
        }
      }
    )
    console.log(history.state.data)
    // Vamos a leer el state del contacto
      if(history.state.data){
        this.contacto= history.state.data;
      }
      if(history.state.filtro){
        this.filtroPrevio=history.state.filtro;
      }

  }
}
