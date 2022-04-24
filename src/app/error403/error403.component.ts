import {Component, OnInit} from '@angular/core';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-error403',
  templateUrl: './error403.component.html',
  styleUrls: ['./error403.component.scss']
})
export class Error403Component implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goBack() {
    this.router.navigate(['auth']);
  }
}
