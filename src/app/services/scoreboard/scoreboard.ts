
import { CollectionServiceService } from "../../memory/collection-service.service";
import { ScoreClass } from "src/app/models/score-class.model";
import { IScoreBoard } from "./scoreboard.interface";

export class ScoreBoard implements IScoreBoard {
   
    getLatestScoreBoard():ScoreClass[]{
        let latestScores: ScoreClass[] = [];
        let memory = CollectionServiceService.getInstance();
            memory.games.forEach( (game, index) => {
          let scoresSelected=  memory.scores.filter(it => it.game_id==game.id)
          let latest = scoresSelected.reduce(function (r, a) {
            return new Date(r.createdOn) > new Date(a.createdOn) ? r : a;
         });
          latestScores.push(latest);
        });
        return latestScores
   }
}