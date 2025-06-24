import { Block } from "./block";
import { YellowBlock } from "./yellowBlock";

export class RedBlock extends Block {

  constructor(block: YellowBlock) {
    super(block.row, block.column, block.columns);
  }

}

window.customElements.define("red-brick", RedBlock as any);
