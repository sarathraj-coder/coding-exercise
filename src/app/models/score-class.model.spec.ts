import { ScoreClass } from './score-class.model';

describe('ScoreClass', () => {
  it('should create an instance', () => {
    expect(new ScoreClass(1,1,0,0,new Date().toUTCString(),1)).toBeTruthy();
  });
});
