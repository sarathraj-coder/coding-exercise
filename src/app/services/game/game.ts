import { GameClass } from "../../models/game-class.model"
import { IGame } from "./game.interface";


export class Game implements IGame {

    create(game: GameClass): GameClass {
        throw new Error("Method not implemented.");
    }
    start(id: Number): Boolean {
        throw new Error("Method not implemented.");
    }
    stop(id: Number): Boolean {
        throw new Error("Method not implemented.");
    }
   
  }