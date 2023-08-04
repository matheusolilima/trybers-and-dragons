import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  public energyType: EnergyType;
  private static rangersCreated = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    Ranger.addRanger();
  }

  private static addRanger(): void {
    this.rangersCreated += 1;
  }

  static createdArchetypeInstances(): number {
    return this.rangersCreated;
  }
}