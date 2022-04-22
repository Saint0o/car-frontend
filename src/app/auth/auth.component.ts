import { Component } from '@angular/core';
import {ApiService} from "../api.service";
import {Auth} from "../Auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [ApiService]
})
export class AuthComponent {

  auth: Auth = new Auth("", "");

  constructor(private apiService: ApiService, private router: Router) { }

  submit(auth: Auth) {
    this.apiService.postAuth(auth)
      .subscribe()

    this.router.navigate(['cars']);
  }




}
