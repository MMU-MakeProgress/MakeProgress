import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WheelsPage } from './wheels';

@NgModule({
  declarations: [
    WheelsPage,
  ],
  imports: [
    IonicPageModule.forChild(WheelsPage),
  ],
})
export class WheelsPageModule {}
