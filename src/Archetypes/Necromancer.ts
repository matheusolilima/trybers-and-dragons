import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  public energyType: EnergyType;
  private static NecromancersCreated = 0;
  
  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    Necromancer.addNecromancer();
  }

  private static addNecromancer(): void {
    this.NecromancersCreated += 1;
  }
  
  static createdArchetypeInstances(): number {
    return this.NecromancersCreated;
  }
}