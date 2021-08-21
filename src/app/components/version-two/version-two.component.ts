import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../../services/pokemon.service';
import {MatTableDataSource} from '@angular/material/table';
import {PokemonModelTwo} from '../../model/pokemonTwo.model';
import {PageEvent} from '@angular/material/paginator';
import {PokemonModel} from '../../model/pokemon.model';
import {PokemonModelDetails} from '../../model/pokemonDetails.model';

@Component({
  selector: 'pokemon-version-two',
  templateUrl: './version-two.component.html',
  styleUrls: ['./version-two.component.css']
})
export class VersionTwoComponent implements OnInit {

  constructor(private service: PokemonService) {
  }

  displayedColumns = ['name'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  pokemonName: string;
  pokemonType: string;

  pokemonNameURL = 'https://pokeapi.co/api/v2/pokemon/';
  pokemonTypeURL = 'https://pokeapi.co/api/v2/type/';

  length: number;
  pageSize = 10;
  /**
   * Lifecycle function called on initialization
   */
  ngOnInit(): void {

    const pokemonList = [];
    this.service.getPokemon('10', '0').subscribe(response => {
      console.log(response);

      this.service.getPokemon(response.count.toString(), '0').subscribe(respo => {
        console.log(respo);
        respo.results.forEach( r => {
          pokemonList.push(r.name);
        });
        this.dataSource = new MatTableDataSource<any>(pokemonList);
        console.log(this.dataSource.data.forEach(r => {
          console.log(r);
        }));
      });
    });
  }

mapPokemonTwo(resp: any) {

  const pokemonData = new PokemonModelDetails();

  pokemonData.name = resp.name;
  resp.types.forEach( t => {
    pokemonData.type += t.type.name + ', ';
  });
  pokemonData.type = pokemonData.type.slice(0, -2);
  pokemonData.height = resp.height;
  pokemonData.weight = resp.weight;
  resp.abilities.forEach( ability => {
    pokemonData.signatureAbility += ability.ability.name + ', ';
  });
  pokemonData.signatureAbility = pokemonData.signatureAbility.slice(0, -2);

  console.log('podatak '  + pokemonData.name + ' ' + pokemonData.signatureAbility + ' ' +
    pokemonData.weight + ' ' + pokemonData.height + '  ' + pokemonData.type);

  return pokemonData;
}

  getNextPokemonPage(event: PageEvent){
    const pokemonList = [];
    // tslint:disable-next-line:max-line-length
    console.log('event.pageSize + event.pageIndex + event.previousPageIndex + event.length ' + event.pageSize + ' ' + event.pageIndex + ' ' + event.previousPageIndex + ' ' + event.length);
    // tslint:disable-next-line:label-position
    const offset = event.pageIndex + event.pageSize;
    this.service.getPokemon(event.pageSize.toString(), offset.toString() ).subscribe(response => {
      console.log('popis svih: ' + response);

      response.results.forEach(res => {
        console.log(res);
      });
    });
  }
}
