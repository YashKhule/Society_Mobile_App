import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocietyexpensesPage } from './societyexpenses.page';

const routes: Routes = [
  {
    path: '',
    component: SocietyexpensesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocietyexpensesPageRoutingModule {}
