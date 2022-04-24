import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Car} from "../Car";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

 car: Car = new Car("", "", 0, "", 0, 0);
 id: number | undefined;
 private subscription: Subscription | undefined;

  constructor(private apiService: ApiService, private router: Router, private activateRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.subscription = this.activateRoute.params.subscribe(params=>this.id=params['id']);

    this.apiService.getCar(this.id).subscribe(car => this.car = car);
  }

 editCar(car: Car) {
    this.car.id = this.id;
    this.apiService.putCar(car).subscribe()
    this.router.navigate(['cars']);
 }
}
