import Fighter/* , { SimpleFighter } */ from '../Fighter/Fighter';
// import Fighter from './Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _p2: Fighter;
  
  constructor(p1: Fighter, p2: Fighter) {
    super(p1);
    this._p2 = p2;
  }
  
  fight(): number {
    while (this.player.lifePoints > 0 && this._p2.lifePoints > 0) {
      this.player.attack(this._p2);
      this._p2.attack(this.player);
    }
    return super.fight();
  }
}
