import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  public energyType: EnergyType;
  private static warriorsCreated = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    Warrior.addWarrior();
  }

  private static addWarrior(): void {
    this.warriorsCreated += 1;
  }

  static createdArchetypeInstances(): number {
    return this.warriorsCreated;
  }
}