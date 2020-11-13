import { MsgComponent } from './msg/msg.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoemsComponent } from './poems/poems.component';
import { MemoriesComponent } from './memories/memories.component';

const routes: Routes = [
  {
  path:'',
  component: HomeComponent
  },
  {
    path: 'Poems',
    component: PoemsComponent
  },
  {
    path: 'msg',
    component: MsgComponent
  },
  {
    path: 'memories',
    component: MemoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
