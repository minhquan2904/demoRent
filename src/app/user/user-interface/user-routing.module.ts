import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserInterfaceComponent } from './user-interface.component';

const routes: Routes = [
  {
    path: '',
    component: UserInterfaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
