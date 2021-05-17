import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentsModule } from './shared/components/components.module';
import { PipesModule } from './shared/pipes/pipes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, ComponentsModule, PipesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
