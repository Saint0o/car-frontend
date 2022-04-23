import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable, Subscribable} from "rxjs";
import {Car} from "./Car";

const host = 'http://localhost:8189/v1/'


export interface Auth {
  login: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(host + 'cars/');
  }

  postAuth(auth: Auth) {
    const body = {login: auth.login, password: auth.password};
    return this.http.post(host + 'authorization/', body);
  }

  deleteCar(id: number) {
    return this.http.delete(host + 'cars/' + id);
  }

  postCar(car: Car) {
    const body = {
      model: car.model, price: car.price, power: car.power, description: "description", brandName: "bmw"
    }
    return this.http.post(host + 'cars/', body)
  }
}
