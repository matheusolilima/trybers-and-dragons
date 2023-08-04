import Race from './Race';

export default class Dwarf extends Race {
  public maxLifePoints: number;
  private static dwarvesCreated = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 80;
    Dwarf.addDwarf();
  }

  private static addDwarf(): void {
    this.dwarvesCreated += 1;
  }
  
  static createdRacesInstances(): number {
    return this.dwarvesCreated;
  }
}