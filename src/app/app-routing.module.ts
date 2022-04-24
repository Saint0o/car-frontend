import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {AuthComponent} from "./auth/auth.component";
import {AdminComponent} from "./admin/admin.component";
import {MainComponent} from "./main/main.component";
import {EditComponent} from "./edit/edit.component";

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    data: {login: true}
  },
  {
    path: 'signup',
    component: AuthComponent,
    data: {login: false}
  },
  {
    path: 'add-car',
    component: AdminComponent,
  },
  {
    path: 'cars',
    component: MainComponent,
  },
  {
    path: 'edit-car/:id',
    component: EditComponent,
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
