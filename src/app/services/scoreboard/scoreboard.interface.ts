import { ScoreClass } from "src/app/models/score-class.model";


export interface IScoreBoard {
    getLatestScoreBoard():ScoreClass[]
}