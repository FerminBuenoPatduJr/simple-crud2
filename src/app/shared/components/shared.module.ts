import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandBarComponent } from '../components/command-bar/command-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    CommandBarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    CommandBarComponent
  ]
})
export class SharedModule { }
