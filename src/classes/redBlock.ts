import { Block } from "./block";
import { BlueUpgrade } from "./blueUpgrade";
import { YellowBlock } from "./yellowBlock";

export class RedBlock extends Block {
  private _upgrade: BlueUpgrade;

  constructor(block: YellowBlock) {
    super(block.row, block.column, block.columns);
    this._upgrade = block.upgrade;
  }

  public get upgrade(): BlueUpgrade {
    return this._upgrade;
  }

}

window.customElements.define("red-brick", RedBlock as any);
