import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VersionOneComponent } from './version-one.component';


const routes: Routes = [
  { path: '/versionOne', component: VersionOneComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VersionOneRoutingModule{}

