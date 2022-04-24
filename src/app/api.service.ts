import {Injectable} from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {observable, Observable, Subscribable} from "rxjs";
import {Car} from "./Car";
import {User} from "./User";

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
    return this.http.post<User>(host + 'authorization/', body, {observe: 'response'});
  }

  deleteCar(id: number) {
    return this.http.delete(host + 'cars/' + id);
  }

  postCar(car: Car) {
    const body = {
      model: car.model, price: car.price, power: car.power, description: "description", brandName: "bmw"
    }
    return this.http.post(host + 'cars/', body);
  }

  putCar(car: Car) {
    const body = {
      id: car.id, model: car.model, price: car.price, power: car.power, description: "description", brandName: "bmw"
    }
    return this.http.put(host + 'cars/', body);
  }

  getCar(id: number | undefined): Observable<Car> {
    return this.http.get<Car>(host + 'cars/' + id);
  }
}
