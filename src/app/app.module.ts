import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShortsComponent } from './shorts/shorts.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { ContactComponent } from './contact/contact.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HistoryComponent } from './history/history.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { YourchannelComponent } from './yourchannel/yourchannel.component';
import { LikedvediosComponent } from './likedvedios/likedvedios.component';
import { AllComponent } from './home/all/all.component';
import { MusicComponent } from './home/music/music.component';
import { LiveComponent } from './home/live/live.component';
import { TelugucinemaComponent } from './home/telugucinema/telugucinema.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShortsComponent,
    SubscriptionsComponent,
    ContactComponent,
    HistoryComponent,
    PlaylistsComponent,
    YourchannelComponent,
    LikedvediosComponent,
    AllComponent,
    MusicComponent,
    LiveComponent,
    TelugucinemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbar,
    MatButtonModule,
    MatSidenavModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
