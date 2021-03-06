import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MenDetails } from './features/services/men/model/MenDetails.model';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient){}

  private baseUrl= 'http://localhost:8084/api';
  private baseUrlDBJSON= 'http://localhost:8084/api/machinedetails';

  public getKidsServiceDetails(){
    return this.http.get<MenDetails[]>(this.baseUrl+"/men");
}



}
