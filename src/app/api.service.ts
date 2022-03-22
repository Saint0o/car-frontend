import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable, Subscribable} from "rxjs";

const host = 'http://localhost:8189/showroom/v1/'

export interface Car {
  brandName: string;
  description?: string;
  id: number;
  model: string;
  power: number;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(host + 'cars')
  }
}
