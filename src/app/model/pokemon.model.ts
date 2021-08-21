export class PokemonModel {
  name = '';
  type = '';
  height = '';
  weight = '';
  signatureAbility = '';
  baseExperience = '';

  static fromObject(data: any) {
    const model = new PokemonModel();
    model.name = data.name;
    model.type = data.type;
    model.height = data.height;
    model.weight = data.weight;
    model.signatureAbility = data.signatureAbility;
    model.baseExperience = data.baseExperience;
  }
}

