import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScoreService } from '../../services/score/score.service';
import { ScoreBoardService } from '../../services/scoreboard/score-board.service';
import { UserService } from '../../services/user/user.service';
import { GameService } from '../../services/game/game.service';

import { ScoreboardComponent } from './scoreboard.component';
import { FormsModule } from '@angular/forms';

describe('ScoreboardComponent', () => {
  let component: ScoreboardComponent;
  let gameService:GameService
  let scoreService:ScoreService
  let scoreboardService:ScoreBoardService
  let userService:UserService
  let fixture: ComponentFixture<ScoreboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ ScoreboardComponent ],
      providers:[GameService,ScoreBoardService,ScoreService,UserService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreboardComponent);
    component = fixture.componentInstance;
    gameService = TestBed.inject(GameService);
    scoreService = TestBed.inject(ScoreService);
    scoreboardService=TestBed.inject(ScoreBoardService);
    userService = TestBed.inject(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Getting game list ', () => {
       const loadData = spyOn(component,'loadData')
       component.ngOnInit();
       expect(loadData).toHaveBeenCalled();
  });

  it('Updating score of Team 1 to be called', () => {
    const loadData = spyOn(component,'updateScore')
       component.ngOnInit();
       component.updateScore(1,1,1);
     expect(loadData).toHaveBeenCalled();
  });


  it('Updating score of Team 1', () => {
       component.ngOnInit();
       component.updateScore(1,1,1)
       let scores =  scoreService.getAllScores().filter(item => item.game_id==1)
       let latest = scores.reduce(function (r, a) {
        return new Date(r.createdOn) > new Date(a.createdOn) ? r : a;
        });
       expect(latest.homeTeamScore).toBe(1);
  });

  it('Stop Game', () => {
    component.ngOnInit();
    component.stopGame(1)
    let game = gameService.getGame(1)
    expect(game?.status).toBe(false);
  });


  it('Summery of game ', () => {
    component.ngOnInit();
    component.summery()
    let game = gameService.getGame(1)
    expect(component.scoresboardSummery.length).toBeGreaterThan(0);
   });


});
