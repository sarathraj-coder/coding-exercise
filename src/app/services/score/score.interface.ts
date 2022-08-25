import { ScoreClass } from "../../models/score-class.model"


export interface IScore {
    insert(game:ScoreClass): ScoreClass
    getAllScores():ScoreClass[]
    createScore(gameId:number,homeTeamScore:number,awayTeamScore:number,createdBy:number):ScoreClass
}