import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl :string ='https://restcountries.com/v3.1';


  constructor( private http : HttpClient) {
    //? Este modulo lo estamos importando desde app.module, es uan directiva de angular muy util 
   }
   buscarPais( termino:string ): Observable<any>{
    const url = `${this.apiUrl}/name/${termino}`;  
    return this.http.get( url );
   }
}
