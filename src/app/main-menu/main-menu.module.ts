import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  declarations: [MainMenuComponent],
  imports: [CommonModule, MatSelectModule],
})
export class MainMenuModule {}
