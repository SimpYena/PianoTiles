import { Application } from "pixi.js";
import { GamePlayScene } from "./scene/gamePlayScene";
import { Setting } from "./setting";
export default class Game {
  constructor() {
    this.app = new Application({
      width: Setting.WIDTH,
      height: Setting.HEIGHT,
      backgroundColor: 0xe6ffff,
    });
    document.body.appendChild(this.app.view);
    this.initGameScene();
  }
  initGameScene() {
    this.gameScene = new GamePlayScene();
    this.app.stage.addChild(this.gameScene);
  }
}
