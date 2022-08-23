import { Injectable } from '@angular/core';
import { GameClass } from '../models/game-class.model';
import GamesJson from '../../assets/game.json';
import UserJson from '../../assets/user.json';
import ScoreJson from '../../assets/score.json';
import { UserClass } from '../models/user-class.model';
import { ScoreClass } from '../models/score-class.model';
@Injectable({
  providedIn: 'root'
})
export class CollectionServiceService {

  private static instance: CollectionServiceService;
  private constructor() { }
  public static getInstance(): CollectionServiceService {
    if (!CollectionServiceService.instance) {
      CollectionServiceService.instance = new CollectionServiceService();
    }

    return CollectionServiceService.instance;
}

  games: GameClass[] = GamesJson;
  users: UserClass[] = UserJson;
  scores: ScoreClass[] = ScoreJson;


  getGames(): GameClass[]{
    return this.games
  }

  createGame(){
    //TODO 
  }

  createScore(){
    //TODO 
  }

  insertScore(){

  }
 
  getUsers():UserClass[]{
    return this.users
  }


  getAllScores():ScoreClass[]{
    return this.scores
  }


  getgameSummery(){
    //TODO 
  }


  



}
