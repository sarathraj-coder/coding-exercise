import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameService } from '../../services/game/game.service';
import { ScoreService } from '../../services/score/score.service';


import { GameComponent } from './game.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let gameService:GameService
  let scoreService:ScoreService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameComponent ],
      providers:[GameService,ScoreService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    gameService = TestBed.inject(GameService);
    scoreService = TestBed.inject(ScoreService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('create Game', () => {
    // expect(component).toBeTruthy();
     const startGame = spyOn(component,'startGame')
     component.ngOnInit()
     component.home="Home_Team_A"
     component.away="Home_Team_B"
     component.startGame()
     expect(startGame).toHaveBeenCalled();
   });
});
