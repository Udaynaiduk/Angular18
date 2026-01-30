import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';


import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { ViewModule } from './view';


@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ViewModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
