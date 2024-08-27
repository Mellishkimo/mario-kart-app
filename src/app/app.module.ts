import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemModule } from './item/item.module';
import { MainMenuModule } from './main-menu/main-menu.module';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';

@NgModule({
  declarations: [AppComponent, HowToPlayComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ItemModule,
    MainMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
