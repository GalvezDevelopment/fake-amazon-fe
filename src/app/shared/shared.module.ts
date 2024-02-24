import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { TruncatePipe } from './pipes/truncate.pipe';

const materialComponents = [
  MatToolbarModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    TruncatePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ...materialComponents
  ],
  exports: [HttpClientModule, ...materialComponents, TruncatePipe]
})
export class SharedModule { }
