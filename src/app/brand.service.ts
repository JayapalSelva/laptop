import { Injectable } from '@angular/core';
import { Brand } from './brand';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
private baseurl="http://localhost:8080/go/laptopbrand";
private baseurl2="http://localhost:8080/go/brandget";

  constructor(private httpclient:HttpClient) { }
  add(brand:Brand):Observable<object>{
    return this.httpclient.post(`${this.baseurl}`,brand)
  }

  get():Observable<String[]>{
    return this.httpclient.get<string[]>(`${this.baseurl2}`,)
  }
}
