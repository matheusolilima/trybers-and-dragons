import Race from './Race';

export default class Halfling extends Race {
  public maxLifePoints: number;
  private static halflingsCreated = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 60;
    Halfling.addHalfling();
  }

  private static addHalfling(): void {
    this.halflingsCreated += 1;
  }
  
  static createdRacesInstances(): number {
    return this.halflingsCreated;
  }
}