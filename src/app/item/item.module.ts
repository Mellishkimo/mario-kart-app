import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDrawerComponent } from './item-drawer/item-drawer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ItemDrawerComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    FlexModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
})
export class ItemModule {}
