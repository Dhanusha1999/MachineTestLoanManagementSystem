import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerViewRequestComponent } from './manager-view-request/manager-view-request.component';
import { ManagerAddVerifyComponent } from './manager-add-verify/manager-add-verify.component';

const routes: Routes = [
  { path: 'list', component: ManagerViewRequestComponent },
  { path: 'add', component: ManagerAddVerifyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerRoutingModule {}
