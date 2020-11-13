import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PoemsComponent } from './poems/poems.component';
import { MsgComponent } from './msg/msg.component';
import { MemoriesComponent } from './memories/memories.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PoemsComponent,
    MsgComponent,
    MemoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
