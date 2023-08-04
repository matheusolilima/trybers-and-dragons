import SimpleFighter from './Fighter/SimpleFighter';
import Fighter from './Fighter';

export default class Monster implements SimpleFighter {
  protected _strength: number;
  protected _lifePoints: number;

  constructor(/* public n: string */) {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get strength(): number {
    return this._strength;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;
    if (this.lifePoints <= 0) this._lifePoints = -1;
    return this.lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }
}
