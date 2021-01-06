import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { VersionOneComponent } from './version-one/version-one.component';
import { PokemonsComponent } from './pokemons/pokemons.component';

const routes: Routes = [
  {
    path: '', component: PokemonsComponent,
    children: [
      { path: 'home', component: HomeComponent},
      { path: 'versionOne', component: VersionOneComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
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
