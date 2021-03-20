import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Pokemon} from '../pokemons/pokemon';
import {PokemonService} from '../pokemons/pokemon.service';

@Component({
  selector: 'pokemon-version-one',
  templateUrl: './version-one.component.html',
  styleUrls: ['./version-one.component.css']
})
export class VersionOneComponent implements OnInit {
  displayedColumns = ['name', 'type', 'heightWeight', 'signatureAbility', 'baseExperience'];
  dataSource: MatTableDataSource<Pokemon> = new MatTableDataSource<Pokemon>();
  constructor(private service: PokemonService) {
  }
  ngOnInit(): void {
    let pokemon = [];
    this.service.getPokemon('10', '0').subscribe(response => {
      console.log(response);
      response.results.forEach(res => {
        console.log(res);
        this.service.getPokemonDetails(res.url).subscribe(resp => {
          console.log(resp);
          const podatak = new Pokemon();
          podatak.name = resp.name;
          resp.types.forEach( t => {
            podatak.type += t.type.name + ', ';
          });
          podatak.type = podatak.type.slice(0, -2);
          podatak.height = resp.height;
          podatak.weight = resp.weight;
          resp.abilities.forEach( ability => {
            podatak.signatureAbility += ability.ability.name + ', ';
          });
          podatak.signatureAbility = podatak.signatureAbility.slice(0, -2);
          podatak.baseExperience = resp.base_experience;
          console.log('podatak '  + podatak.name + ' '  + podatak.baseExperience + ' ' + podatak.signatureAbility + ' ' +
            podatak.weight + ' ' + podatak.height + '  ' + podatak.type);
          pokemon.push(podatak);
          this.dataSource = new MatTableDataSource<Pokemon>(pokemon);
        });
      });
    });
  }


}
