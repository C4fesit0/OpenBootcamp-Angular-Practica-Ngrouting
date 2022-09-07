import { Injectable } from '@angular/core';
import { LISTA_CONTACTOS } from '../mocks/contacts.mockl';
import { Observable } from 'rxjs';
import { IContact } from '../models/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  listaDeContactos : IContact[] = LISTA_CONTACTOS;

  constructor() { }

  obtenerContactos (sexo?:string): Promise<IContact[]> | undefined{
    console.log(sexo);
    if(sexo=='hombre' || sexo=='mujer'){
      let listaFiltrada = this.listaDeContactos.filter((contacto)=>
      contacto.sexo==sexo);
      return Promise.resolve(listaFiltrada);
    }else if (sexo=='todos')
    {
      return Promise.resolve(this.listaDeContactos);

    }else return Promise.reject('Filtro no valido')
  }
}
