import Monster from './Monster';
import Fighter from './Fighter';

export default class Dragon extends Monster {
  private _magic = 5;

  constructor() {
    super();
    this._lifePoints = 999;
    this._strength = 200;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  special(enemy: Fighter[]): void {
    enemy.forEach((fighter) => {
      fighter.receiveDamage(this.strength);
    });
    this._magic -= 1;
  }

  rest(): void {
    this._magic += 1;
  }
}
