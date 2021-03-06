import { Component } from '@angular/core';
import {ApiService} from "../api.service";
import {Router} from "@angular/router";
import {Car} from "../Car";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  car: Car = new Car("", "", 0, "", 0, 0);

  constructor(private apiService: ApiService, private router: Router) { }

  addCar(car: Car) {
    this.apiService.postCar(car).subscribe();

    this.router.navigate(['cars']);
  }


}
