import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPageComponent } from './admin-page.component';
import { AdminDashComponent } from '../layout/admin-dash/admin-dash.component';
import { AdminTableMotelComponent } from '../layout/admin-table-motel/admin-table-motel.component';
const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      {path: '', component: AdminDashComponent},
      {path: 'home', component: AdminDashComponent},
      {path: 'motel', component: AdminTableMotelComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
