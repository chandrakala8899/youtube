import { Component, NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { LikedvediosComponent } from './likedvedios/likedvedios.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { AllComponent } from './home/all/all.component';
import { MusicComponent } from './home/music/music.component';
import { LiveComponent } from './home/live/live.component';
import { TelugucinemaComponent } from './home/telugucinema/telugucinema.component';

const routes: Routes = [
{path:'contact',component:ContactComponent},
{path:'history',component:HistoryComponent},

{path:'home',component:HomeComponent,children:[
  {path:'all',component:AllComponent},
  {path:'music',component:MusicComponent},
  {path:'live',component:LiveComponent},

  {path:'telugucinema',component:TelugucinemaComponent}

]},

{path:'likedvedios',component:LikedvediosComponent},
{path:'subscriptions',component:SubscriptionsComponent},
{path:'playlists',component:PlaylistsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
