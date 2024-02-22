import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule as AppStateModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppStateModule.forRoot({}, {}),
    EffectsModule.forRoot([])
  ]
})
export class StoreModule { }
