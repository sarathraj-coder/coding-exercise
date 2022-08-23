import { ScoreClass } from "../../models/score-class.model"


export interface IScore {
    insert(game:ScoreClass): ScoreClass
    getScoreByGame(id:Number): Boolean
}