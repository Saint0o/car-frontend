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
      .subscribe(res => {
        if (res.status == 200) {
          let jwtUser = res.body?.jwt
          if (jwtUser != null) {
            localStorage.setItem('jwt', jwtUser)
            this.router.navigate(['cars'])
          }
        } else {
          this.router.navigate(['error403'])
        }
      })

    console.log(this.user.jwt)

  }


}
