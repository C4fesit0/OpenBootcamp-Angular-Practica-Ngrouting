import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from '../models/contact.interface';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(contacto: IContact, ...args: unknown[]): unknown {
    return `${contacto.nombre} ${contacto.apellido}`;
  }

}
