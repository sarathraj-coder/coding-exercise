import { Component, OnInit } from '@angular/core';
import { GameClass } from 'src/app/models/game-class.model';
import { ScoreClass } from 'src/app/models/score-class.model';
import { GameService } from 'src/app/services/game/game.service';
import { ScoreService } from 'src/app/services/score/score.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
 
   home=''
   away=''

  constructor(private gameService:GameService,private scoreService:ScoreService) { 
   
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
