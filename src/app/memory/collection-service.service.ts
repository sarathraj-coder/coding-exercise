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
  private constructor() {
    CollectionServiceService.dummyGames()
   }
  public static getInstance(): CollectionServiceService {
    if (!CollectionServiceService.instance) {
      CollectionServiceService.instance = new CollectionServiceService();
    }

    return CollectionServiceService.instance;
}


public static dummyGames(){
  let date = new Date().toUTCString()
  CollectionServiceService.games.push(new GameClass(1,"Mexico","Canada",true,date,1,date,1))
  CollectionServiceService.games.push(new GameClass(2,"Spain","Brazil",true,date,1,date,1))
  CollectionServiceService.games.push(new GameClass(3,"Germany","France",true,date,1,date,1))
  CollectionServiceService.games.push(new GameClass(4,"Uruguay","Italy",true,date,1,date,1))
  CollectionServiceService.games.push(new GameClass(5,"Argentina","Australia",true,date,1,date,1))

  CollectionServiceService.users.push(new UserClass(1,"sarath"));

  CollectionServiceService.scores.push(new ScoreClass(1,1,0,0,date,1));
  CollectionServiceService.scores.push(new ScoreClass(2,2,0,0,date,1));
  CollectionServiceService.scores.push(new ScoreClass(3,3,0,0,date,1));
  CollectionServiceService.scores.push(new ScoreClass(4,4,0,0,date,1));
  CollectionServiceService.scores.push(new ScoreClass(5,5,0,0,date,1));
}

public static games: GameClass[] = []
public static  users: UserClass[] = []
public static scores: ScoreClass[] = []

}
