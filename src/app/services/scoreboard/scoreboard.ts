
import { ScoreClass } from "src/app/models/score-class.model";
import { IScoreBoard } from "./scoreboard.interface";

export class ScoreBoard implements IScoreBoard {
    getListOfGames(): ScoreClass[] {
        throw new Error("Method not implemented.");
    }
  }