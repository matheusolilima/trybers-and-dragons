import Race from './Race';

export default class Elf extends Race {
  public maxLifePoints: number;
  private static elvesCreated = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 99;
    Elf.addElf();
  }

  private static addElf(): void {
    this.elvesCreated += 1;
  }
  
  static createdRacesInstances(): number {
    return this.elvesCreated;
  }
}