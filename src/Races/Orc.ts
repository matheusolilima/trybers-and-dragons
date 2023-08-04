import Race from './Race';

export default class Orc extends Race {
  public maxLifePoints: number;
  private static orcsCreated = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 74;
    Orc.addOrc();
  }

  private static addOrc(): void {
    this.orcsCreated += 1;
  }
  
  static createdRacesInstances(): number {
    return this.orcsCreated;
  }
}