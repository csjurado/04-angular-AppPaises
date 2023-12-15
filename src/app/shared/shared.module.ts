import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebardComponent } from './sidebard/sidebard.component';



@NgModule({
  declarations: [
    SidebardComponent
  ],
  exports:[
    SidebardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
