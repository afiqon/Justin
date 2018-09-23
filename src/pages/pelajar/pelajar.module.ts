import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PelajarPage } from './pelajar';

@NgModule({
  declarations: [
    PelajarPage,
  ],
  imports: [
    IonicPageModule.forChild(PelajarPage),
  ],
})
export class PelajarPageModule {}
