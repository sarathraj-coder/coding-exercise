import { GameClass } from "../../models/game-class.model"


export interface IGame {
    create(game:GameClass): GameClass
    start(id:Number): Boolean
    stop(id:Number): Boolean
}