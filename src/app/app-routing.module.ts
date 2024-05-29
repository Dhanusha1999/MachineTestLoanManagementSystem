import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerComponent } from './manager/manager.component';
import { OfficerComponent } from './officer/officer.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {
    path: 'manager',
    component: ManagerComponent,
    loadChildren: () =>
      import('./manager/manager.module').then((x) => x.ManagerModule),
  },
  {
    path: 'officer',
    component: OfficerComponent,
    loadChildren: () =>
      import('./officer/officer.module').then((x) => x.OfficerModule),
  },
  {
    path: 'customer',
    component: CustomerComponent,
    loadChildren: () =>
      import('./customer/customer.module').then((x) => x.CustomerModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
