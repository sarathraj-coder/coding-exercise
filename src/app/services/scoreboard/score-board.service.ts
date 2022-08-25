import { Injectable } from '@angular/core';
import { CollectionServiceService } from "../../memory/collection-service.service";
import { ScoreClass } from "src/app/models/score-class.model";
import { IScoreBoard } from "./scoreboard.interface";
@Injectable({
  providedIn: 'root'
})
export class ScoreBoardService {

  constructor() { }

  getLatestScoreBoard():ScoreClass[]{
    let latestScores: ScoreClass[] = [];
    CollectionServiceService.games.forEach( (game, index) => {
      let scoresSelected=  CollectionServiceService.scores.filter(it => it.game_id==game.id)
      let latest = scoresSelected.reduce(function (r, a) {
        return new Date(r.createdOn) > new Date(a.createdOn) ? r : a;
     });
      latestScores.push(latest);
    });
    return latestScores
}

}
