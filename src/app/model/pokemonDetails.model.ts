export class PokemonModelDetails {
  name = '';
  type = '';
  height = '';
  weight = '';
  signatureAbility = '';

  static fromObject(data: any) {
    const model = new PokemonModelDetails();
    model.name = data.name;
    model.type = data.type;
    model.height = data.height;
    model.weight = data.weight;
    model.signatureAbility = data.signatureAbility;
  }
}

