import { Injectable } from '@angular/core';
import { Laptop } from './laptop';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { TemplateBindingParseResult } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  private baseurl="http://localhost:8080/api/vi/laptop";

  constructor(private httpClient:HttpClient) {}
  add(laptop:Laptop):Observable<object>{
    return this.httpClient.post(`${this.baseurl}`,laptop);
  }
    getvalues():Observable<Laptop[]>{
      return this.httpClient.get<Laptop[]>(`${this.baseurl}`);
    }
    DeleteById(id:number):Observable<object> {
  
      return this.httpClient.delete(`${this.baseurl}/${id}`);
    }
   viewById(id:number):Observable<Laptop>{

    return this.httpClient.get<Laptop>(`${this.baseurl}/${id}`);
   }
   getbyid(id:number):Observable<object>{
    return this.httpClient.get(`${this.baseurl}/${id}`);
   }
    }





  

