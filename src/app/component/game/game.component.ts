import { Component, Inject, OnInit } from '@angular/core';
import { GameClass } from 'src/app/models/game-class.model';
import { IGame } from 'src/app/services/game/game.interface';
import { IScore } from 'src/app/services/score/score.interface';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
 
   home=''
   away=''

  constructor(@Inject('IGame')  private gameService:IGame, 
  @Inject('IScore') private scoreService:IScore) { 
   
  }

  ngOnInit(): void {
  }

  startGame(){
    let date = new Date().toUTCString()
    let createdBy = 1
    let game = new GameClass(0,this.home,this.away,true,date,createdBy,date,createdBy)
    let result =  this.gameService.create(game)
    if(result){
    let score = this.scoreService.createScore(result.id,0,0,createdBy)
    if(score){
      //update Dashboard
      alert("success")
    }
    }
  }

}
