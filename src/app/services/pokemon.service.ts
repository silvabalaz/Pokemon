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

  getPokemon(limit: string, offset: string): Observable<any> {
    return this.http
      .get(this.pokemonURL + '?limit=' + limit + '&offset=' + offset);
  }

  getPokemonDetails(url: string): Observable<any> {
    return this.http.get(url);
  }

}

