import { Container, Graphics } from "pixi.js";
import { Setting } from "../setting";
export class GamePlayScene extends Container {
  constructor() {
    super();
    this.gameContainer = new Container();
    this.addChild(this.gameContainer);
    this.initline();
  }
  initLine() {
    let space = Setting.WIDTH / 4;
    this.line = new Graphics();
    for (let i = 0; i < 4; i++) {
      this.line.lineStyle(1, 0x000000, 0.5);
      this.line.moveTo(space * i, 0);
      this.line.lineTo(space * i, Setting.HEIGHT);
      this.gameContainer.addChild(this.line);
    }
  }
  initNote(){
    this.note = new Graphics();
    this.note.beginFill(0x000000);
    this.note.draw
  }
  update(dt) {}
}
