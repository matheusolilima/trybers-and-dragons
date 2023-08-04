import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
// import { Fighter } from './Fighter';
import Race, { Elf } from './Races';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private maxLifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private name: string;
  private _lifePoints: number;

  constructor(public n: string) {
    this.name = n;
    this._dexterity = Math.floor(Math.random() * 10) + 1;
    this._race = new Elf(this.name, this._dexterity);
    this._archetype = new Mage(this.name);
    this.maxLifePoints = this.race.maxLifePoints;
    this._lifePoints = this.maxLifePoints;
    this._strength = Math.floor(Math.random() * 10) + 1;
    this._defense = Math.floor(Math.random() * 10) + 1;
    this._energy = { type_: this.archetype.energyType,
      amount: 10,
    };
  }
  
  get race():Race {
    return this._race;
  }
  
  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get archetype(): Archetype {
    return this._archetype;
  }
  
  get energy(): Energy {
    return { ...this._energy };
  }
  
  get dexterity(): number {
    return this._dexterity;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }
    if (this.lifePoints <= 0) this._lifePoints = -1;
    return this.lifePoints;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }

  levelUp(): void {
    this.maxLifePoints += Math.floor(Math.random() * 10) + 1;
    this._strength += Math.floor(Math.random() * 10) + 1;
    this._defense += Math.floor(Math.random() * 10) + 1;
    this._dexterity += Math.floor(Math.random() * 10) + 1;
    this._energy.amount = 10;
    if (this.maxLifePoints > this.race.maxLifePoints) {
      this.maxLifePoints = this.race.maxLifePoints;
    }
    this._lifePoints = this.maxLifePoints;
  }

  special(): void {
    if (this.lifePoints < this.maxLifePoints) {
      this._lifePoints += 1;
      this._energy.amount -= 1;
    }
  }
}