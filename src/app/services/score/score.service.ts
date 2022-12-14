import { Injectable } from '@angular/core';
import { CollectionServiceService } from "../../memory/collection-service.service";
import { ScoreClass } from "../../models/score-class.model";
import { IScore } from "./score.interface";
@Injectable({
  providedIn: 'root'
})
export class ScoreService implements IScore {

  constructor() { }
  
  

  insert(game: ScoreClass): ScoreClass {
   return this.createScore(game.game_id,game.homeTeamScore,game.awayTeamScore,game.createdBy)
}



getAllScores():ScoreClass[]{
return CollectionServiceService.scores
}


createScore(gameId:number,homeTeamScore:number,awayTeamScore:number,createdBy:number): ScoreClass{
    let id= this.getAllScores().length+1
    debugger
    let score = new ScoreClass(
      id,
      gameId,
      homeTeamScore,
      awayTeamScore,
      new Date().toUTCString(),
      createdBy
    )
    CollectionServiceService.scores.push(score)
    return score
}


}
