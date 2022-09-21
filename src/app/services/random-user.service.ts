import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRandomContact, Results } from '../models/randomuser';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse){
    if(error.status=== 0){
      console.log(`Ha ocurrido un error: ${error.error}`)
    }else{
      console.error(`Error en el backend: ${error.status}. El error es: ${error.error}`)
    }
  }

  obtenerRandomContact(): Observable<any>{
    return this.http.get('https://randomuser.me/api');
  }

  obtenerRandomContacts(n: number): void{

  }
}
