import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocietyexpensesPageRoutingModule } from './societyexpenses-routing.module';

import { SocietyexpensesPage } from './societyexpenses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocietyexpensesPageRoutingModule
  ],
  declarations: [SocietyexpensesPage]
})
export class SocietyexpensesPageModule {}
