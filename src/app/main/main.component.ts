import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {Router} from "@angular/router";
import {AdminComponent} from "../admin/admin.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  // @ts-ignore
  cars: Car[];

  constructor(private api: ApiService, private router: Router) {
  }

  ngOnInit(): void {
    this.api.getCars().subscribe(cars => {
      this.cars = cars;
    });
  }

  delete(id: number) {
    this.api.deleteCar(id).subscribe()

    this.api.getCars().subscribe(cars => {
      this.cars = cars;
    });
  }

  add() {
    this.router.navigate(['add-car'])
  }
}
