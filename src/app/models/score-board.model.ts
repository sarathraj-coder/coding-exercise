import { GameClass } from "./game-class.model"
import { ScoreClass } from "./score-class.model"

export class ScoreBoard {
    score:ScoreClass
    game:GameClass

    constructor(score:ScoreClass,game:GameClass){
        this.score=score;
        this.game=game;
      }
      
}
