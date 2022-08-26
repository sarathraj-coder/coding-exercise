import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IGame } from '../../services/game/game.interface';
import { IScore } from '../../services/score/score.interface';

import { GameComponent } from './game.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let gameService:IGame
  let scoreService:IScore
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameComponent ],
      providers:[
        { provide : 'IGame'  ,useValue:{}
      } ,
      { provide : 'IScore'  ,useValue:{}
    } 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    gameService = TestBed.get('IGame');
    scoreService = TestBed.get('IScore');
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
