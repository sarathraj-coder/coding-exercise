import { GameClass } from "../../models/game-class.model"


export interface IGame {
    getGame(id:number):GameClass | undefined
    getGames(): GameClass[]
    create(game:GameClass): GameClass
    start(id:Number): Boolean
    stop(id:Number): Boolean
}