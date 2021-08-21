import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {PokemonModel} from '../../model/pokemon.model';
import {PokemonService} from '../../services/pokemon.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'pokemon-version-one',
  templateUrl: './version-one.component.html',
  styleUrls: ['./version-one.component.css']
})
export class VersionOneComponent implements OnInit {

  constructor(private service: PokemonService) {
  }

  displayedColumns = ['name', 'type', 'heightWeight', 'signatureAbility', 'baseExperience'];
  dataSource: MatTableDataSource<PokemonModel> = new MatTableDataSource<PokemonModel>();

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
      this.length = response.count;
      response.results.forEach(res => {
        console.log(res);
        this.service.getPokemonDetails(res.url).subscribe(resp => {
          console.log(resp);
          pokemonList.push(this.mapPokemon(resp));
          this.dataSource = new MatTableDataSource<PokemonModel>(pokemonList);
        });
      });
    });
  }

  searchPokemon() {
    const pokemonList = [];
    if (this.pokemonName) {
      this.service.getPokemonDetails(this.pokemonNameURL + this.pokemonName).subscribe(resp => {
        console.log(resp);
        pokemonList.push(this.mapPokemon(resp));
        this.dataSource = new MatTableDataSource<PokemonModel>(pokemonList);
      });
    } else if (this.pokemonType) {
        this.service.getPokemonDetails(this.pokemonTypeURL + this.pokemonType).subscribe(resp => {
          console.log(resp);
          resp.pokemon.forEach(res => {
            console.log(res);
            this.service.getPokemonDetails(res.pokemon.url).subscribe(response => {
              console.log(response);
              pokemonList.push(this.mapPokemon(response));
              this.dataSource = new MatTableDataSource<PokemonModel>(pokemonList);
            });
          });
        });
    }
  }

  mapPokemon(resp: any) {

    const pokemonData = new PokemonModel();

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
    pokemonData.baseExperience = resp.base_experience;

    console.log('podatak '  + pokemonData.name + ' '  + pokemonData.baseExperience + ' ' + pokemonData.signatureAbility + ' ' +
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
        this.service.getPokemonDetails(res.url).subscribe(resp => {
          console.log('popis s detaljima: ' + resp);
          pokemonList.push(this.mapPokemon(resp));
          this.dataSource = new MatTableDataSource<PokemonModel>(pokemonList);
        });
      });
    });
  }
}

