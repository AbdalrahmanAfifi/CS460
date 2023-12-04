import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TwitterComponent} from "./twitter/twitter.component";
import { AppRoutingModule } from './app-routing.module';
import {HomeComponent} from "./home/home.component";
import {RedditComponent} from "./reddit/reddit.component";

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'twitter', component: TwitterComponent },
];

@NgModule({
  declarations: [
    RedditComponent,
    TwitterComponent
  ],
  imports: [
    CommonModule,
    AppComponent,
    HomeComponent,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'twitter', component: TwitterComponent}
    ]),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }


