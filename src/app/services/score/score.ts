
import { ScoreClass } from "src/app/models/score-class.model";
import { IScore } from "./score.interface";


export class Score implements IScore {

    insert(game: ScoreClass): ScoreClass {
        throw new Error("Method not implemented.");
    }
    getScoreByGame(id: Number): Boolean {
        throw new Error("Method not implemented.");
    }
   
}