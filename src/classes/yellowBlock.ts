import { Block } from "./block";
import { BlueUpgrade } from "./blueUpgrade";

export class YellowBlock extends Block {
  private _upgrade: BlueUpgrade;

  constructor(row: number, column: number, columns: number, upgrade: BlueUpgrade) {
    super(row, column, columns);
    
    this._upgrade = upgrade;
  }

  public get upgrade(): BlueUpgrade {
    return this._upgrade;
  }
}

window.customElements.define("yellow-brick", YellowBlock as any);
