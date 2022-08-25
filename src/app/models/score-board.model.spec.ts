import { GameClass } from './game-class.model';
import { ScoreBoard } from './score-board.model';
import { ScoreClass } from './score-class.model';

describe('ScoreBoard', () => {
  it('should create an instance', () => {
    expect(new ScoreBoard(new ScoreClass(1,1,0,0,new Date().toUTCString(),1), 
    new GameClass(1,"Team A","TeamB",true,new Date().toUTCString(),1,new Date().toUTCString(),1))).toBeTruthy();
  });
});
