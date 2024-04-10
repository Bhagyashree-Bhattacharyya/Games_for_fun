import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { TableBasicComponent } from './Components/table-basic/table-basic.component';
import { TableOnClickComponent } from './Components/table-on-click/table-on-click.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent,
  },
  {
    path:"test_1",
    component: TableBasicComponent,
  },
  {
    path:"test_2",
    component: TableOnClickComponent,
  },
  {
    path:"login",
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
