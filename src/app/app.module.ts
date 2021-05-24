import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LazyLoaderService } from './services/lazyLoader/lazy-loader.service';
import { lazyArrayToObj } from './services/lazyLoader/lazy-widgets';
import { LAZY_WIDGETS } from './services/lazyLoader/tokens';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LazyLoaderService, { provide: LAZY_WIDGETS, useFactory: lazyArrayToObj }],
  bootstrap: [AppComponent]
})
export class AppModule { }
