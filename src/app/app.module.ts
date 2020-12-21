import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { VersionOneComponent } from './version-one/version-one.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'versionOne', component:  VersionOneComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    VersionOneComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
