import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddCarTransporterPage } from './add-car-transporter.page';

const routes: Routes = [
  {
    path: '',
    component: AddCarTransporterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddCarTransporterPage]
})
export class AddCarTransporterPageModule {}
