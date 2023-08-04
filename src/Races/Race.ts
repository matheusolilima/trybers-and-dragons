export default abstract class Race {
  private _name: string;
  private _dexterity: number;

  constructor(public n: string, public d: number) {
    this._name = n;
    this._dexterity = d;
  }

  get name(): string {
    return this.name;
  }

  get dexterity(): number {
    return this.dexterity;
  }
  
  abstract get maxLifePoints(): number;
  
  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
}