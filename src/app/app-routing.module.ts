import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {AuthComponent} from "./auth/auth.component";
import {AdminComponent} from "./admin/admin.component";
import {MainComponent} from "./main/main.component";

const routes: Routes = [
  {
    path: 'login',
    component: AuthComponent,
    data: {login: true}
  },
  {
    path: 'signup',
    component: AuthComponent,
    data: {login: false}
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: '',
    component: MainComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
