import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  public energyType: EnergyType;
  private static magesCreated = 0;
  
  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    Mage.addMage();
  }

  private static addMage(): void {
    this.magesCreated += 1;
  }
  
  static createdArchetypeInstances(): number {
    return this.magesCreated;
  }
}