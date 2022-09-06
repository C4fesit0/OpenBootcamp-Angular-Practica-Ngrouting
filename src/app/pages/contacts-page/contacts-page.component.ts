import { Component, OnInit } from '@angular/core';
import { IContact } from '../../models/contact.interface';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  listaDeContactos: IContact[]=[
    {
      id: 1,
      nombre: 'Martin',
      apellido: 'Vargas',
      email: 'martin@imaginagroup.com'
    },
    {
      id: 2,
      nombre: 'Andres',
      apellido: 'Garcia',
      email: 'andres@imaginagroup.com'
    },
    {
      id: 3,
      nombre: 'Ana',
      apellido: 'Hernandez',
      email: 'ana@imaginagroup.com'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
