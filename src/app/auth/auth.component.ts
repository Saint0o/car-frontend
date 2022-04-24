import {Component} from '@angular/core';
import {ApiService} from "../api.service";
import {Auth} from "../Auth";
import {Router} from "@angular/router";
import {HttpResponse} from "@angular/common/http";
import {User} from "../User";

@Component({
  selector: 'app-Edit',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [ApiService]
})
export class AuthComponent {

  auth: Auth = new Auth("", "");
  user: User = new User('test')

  constructor(private apiService: ApiService, private router: Router) {
  }

  submit(auth: Auth) {
    this.apiService.postAuth(auth)
      .subscribe(user => {
        console.log(user.jwt);
        localStorage.setItem('jwt', user.jwt)
      })

    console.log(this.user.jwt)

    this.router.navigate(['cars'])
  }


}
