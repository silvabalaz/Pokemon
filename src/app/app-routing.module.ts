import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VersionOneComponent } from './components/version-one/version-one.component';
import {VersionTwoComponent} from './components/version-two/version-two.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent},
  { path: 'versionOne', component: VersionOneComponent },
  { path: 'versionTwo', component: VersionTwoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
