import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfficerViewVerifyComponent } from './officer-view-verify/officer-view-verify.component';

const routes: Routes = [
  { path: 'list', component: OfficerViewVerifyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfficerRoutingModule {}
