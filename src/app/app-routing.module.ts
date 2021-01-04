import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {VersionOneComponent} from './version-one/version-one.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'versionOne', component: VersionOneComponent },
    ]
  },
  { path: '**', component: NotFoundComponent }
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
