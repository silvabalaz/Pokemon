export class PokemonModelTwo {
  name = '';


  static fromObject(data: any) {
    const model = new PokemonModelTwo();
    model.name = data.name;

  }
}
