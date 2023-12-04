import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwitterComponent } from "./twitter/twitter.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'twitter', component: TwitterComponent },
  { path: 'reddit', component: TwitterComponent },
];






