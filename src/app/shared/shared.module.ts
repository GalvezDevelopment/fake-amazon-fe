import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';

const materialComponents = [
  MatToolbarModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ...materialComponents
  ],
  exports: [HttpClientModule, ...materialComponents]
})
export class SharedModule { }
