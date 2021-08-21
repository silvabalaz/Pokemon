import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemonURL = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {
  }

  /**
   * Service for getting {limit} number of pokemons starting from {offset} pokemon
   * @param limit - number of pokemons to be in list
   * @param offset - number from which pokemon to start the list
   * @return - list of pokemons
   */
  getPokemon(limit: string, offset: string): Observable<any> {
    console.log('Calling getPokemon with limit {} and offset {}', limit, offset);
    const response = this.http.get(this.pokemonURL + '?limit=' + limit + '&offset=' + offset);
    console.log('Response getPokemon {}', response);
    return response;
  }

  // TODO: promjeniti na gore navedeni primjer
  getPokemonDetails(url: string): Observable<any> {
    return this.http.get(url);
  }

}

