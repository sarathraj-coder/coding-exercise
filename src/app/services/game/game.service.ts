import { Injectable } from '@angular/core';
import { UserClass } from 'src/app/models/user-class.model';
import { CollectionServiceService } from '../../memory/collection-service.service';
import { GameClass } from '../../models/game-class.model';
import { IUser } from '../user/user.interface';
import { IGame } from './game.interface';

@Injectable({
  providedIn: 'root',
})
export class GameService implements IGame {
  constructor() {}

  create(gameData: GameClass): GameClass {
    return this.createGame(
      gameData.homeTeam,
      gameData.awayTeam,
      gameData.createdBy
    );
  }
  getGame(id: number): GameClass | undefined {
    return CollectionServiceService.games.find((item) => item.id == id);
  }

  getGames(): GameClass[] {
    return CollectionServiceService.games;
  }

  start(id: number): Boolean {
    let game = CollectionServiceService.games.find((item) => item.id == id);
    if (game != undefined) {
      const index = CollectionServiceService.games.indexOf(game);
      game.status = true;
      CollectionServiceService.games[index] = game;
      return true;
    } else {
      return false;
    }
  }
  stop(id: number): Boolean {
    let memory = CollectionServiceService.getInstance();
    let game = CollectionServiceService.games.find((item) => item.id == id);
    if (game != undefined) {
      const index = CollectionServiceService.games.indexOf(game);
      game.status = false;
      CollectionServiceService.games[index] = game;
      return true;
    } else {
      return false;
    }
  }

  createGame(homeTeam: string, awayTeam: string, createdBy: number): GameClass {
    let id = CollectionServiceService.games.length + 1;
    let createdOn = new Date().toUTCString();
    let createduser = createdBy;
    let game = new GameClass(
      id,
      homeTeam,
      awayTeam,
      true,
      createdOn,
      createduser,
      createdOn,
      createduser
    );
    CollectionServiceService.games.push(game);
    return game;
  }
}
