import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDrawerComponent } from './item/item-drawer/item-drawer.component';
import { MainMenuComponent } from './main-menu/main-menu/main-menu.component';
import { SoundboardComponent } from './soundboard/soundboard.component';

const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'draw-items', component: ItemDrawerComponent },
  { path: 'soundboard', component: SoundboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
