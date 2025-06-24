import { Block } from "./block";

export class YellowBlock extends Block {

  constructor(row: number, column: number, columns: number) {
    super(row, column, columns);
  }

}

window.customElements.define("yellow-brick", YellowBlock as any);
