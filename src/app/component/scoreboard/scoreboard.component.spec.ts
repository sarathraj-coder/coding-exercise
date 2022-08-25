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

  // it('should create a game', () => {
  //   expect(component).toBeTruthy();
  // });

   // it('it should get all games', () => {
  //  // expect(component).toBeTruthy();
  //   const getAllGames = spyOn(gameService,"getGames")
  //   component.ngOnInit();
  //   expect(getAllGames).toHaveBeenCalled();
  // });

  // it('create Game', () => {
  //   // expect(component).toBeTruthy();
  //    const startGame = spyOn(component,'startGame')
  //    component.ngOnInit
  //    component.home="Home_Team_A"
  //    component.home="Home_Team_B"
  //    component.startGame()
  //    expect(startGame).toHaveBeenCalled();
  //  });

  it('Getting game list ', () => {
       const loadData = spyOn(component,'loadData')
       component.ngOnInit();
       expect(loadData).toHaveBeenCalled();
  });

  it('Updating score of Team 1', () => {
    const loadData = spyOn(component,'updateScore')
       component.ngOnInit();
       component.updateScore(1,1,1);
     expect(loadData).toHaveBeenCalled();
  });


  it('Updating score of Team 1', () => {
    //const loadData = spyOn(component,'updateScore')
       component.ngOnInit();
       component.updateScore(1,1,1)
       let scores =  scoreService.getAllScores().filter(item => item.id==1)
       let latest = scores.reduce(function (r, a) {
        return new Date(r.createdOn) > new Date(a.createdOn) ? r : a;
        });
       expect(latest.createdBy).toBe(1);
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
