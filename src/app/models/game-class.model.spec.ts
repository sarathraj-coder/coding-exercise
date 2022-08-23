import { GameClass } from './game-class.model';

describe('GameClass', () => {
  it('should create an instance', () => {
    let date = new Date()
    expect(new GameClass(1,"Team A","Team B",true,date.toUTCString(),1,date.toUTCString(),1)).toBeTruthy();
  });
});
