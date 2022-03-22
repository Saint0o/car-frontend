import {Component, OnInit} from '@angular/core';
import {ApiService, Car} from "../api.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  // @ts-ignore
  cars: Car[];

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.api.getCars().subscribe(cars => {
      this.cars = cars;
    });
  }

}
