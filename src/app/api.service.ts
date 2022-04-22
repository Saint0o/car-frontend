import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable, Subscribable} from "rxjs";

const host = 'https://helloworldprojectt.herokuapp.com/v1/'

export interface Car {
  brandName: string;
  description?: string;
  id: number;
  model: string;
  power: number;
  price: number;
}

export interface Auth {
  login: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(host + 'cars')
  }

  postAuth(auth: Auth){

    const body = {login: auth.login, password: auth.password};
    return this.http.post(host + 'authorization', body)
  }
}
