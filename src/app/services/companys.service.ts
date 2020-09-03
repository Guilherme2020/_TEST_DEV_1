import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Company } from '../interfaces/Company'

@Injectable({
  providedIn: 'root'
})
export class CompanysService {

  constructor(
    private _httpClient: HttpClient
  ) { }


  getCompanys(): Observable<Company>{
    let url = "http://localhost:3000/company"

    return this._httpClient.get<Company>(url)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }
  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
