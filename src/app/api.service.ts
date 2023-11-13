import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient : HttpClient) { }

  API_KEY = 'YOUR_API_KEY'; //api key
  //private apiURL = "https://catfact.ninja/fact"; // api url for get function
  private apiURL = "https://reqres.in/api/users"; //"https://www.davaexim.com/ERP/Imitaion/Api/ERP_tag.php";

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json',
      'Access-Control-Allow-Origin':'*'
    })  
  }

  //fetch data from api
  public getData() {
    return this.httpClient.get(this.apiURL); // api url
  }

  //send data to api
  public addData(formData : any) {
    console.log(JSON.stringify(formData));
    var a = this.httpClient.post(this.apiURL, JSON.stringify(formData), this.httpOptions).pipe(catchError(this.errorHandler));
    console.log(a);
    return a;
    // return this.httpClient.post(this.apiURL, JSON.stringify(formData), this.httpOptions).pipe(catchError(this.errorHandler));
  }

  //error handle function
  errorHandler(error : {
    error: {
      message: string;
    };
    status: any;
    message: any;
  }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    }
    else {
      errorMessage = "Error code: ${error.status}\n Message: ${error.message}";
    }
    return throwError(errorMessage);
  }
}
