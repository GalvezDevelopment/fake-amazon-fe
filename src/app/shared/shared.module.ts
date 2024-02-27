import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { TruncatePipe } from './pipes/truncate.pipe';

const materialComponents = [
  MatToolbarModule,
  MatButtonModule,
  MatBadgeModule,
  MatIconModule
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
