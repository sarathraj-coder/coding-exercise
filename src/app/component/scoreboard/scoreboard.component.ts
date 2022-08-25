import { Component, OnInit } from '@angular/core';
import { ScoreBoard } from '../../models/score-board.model';
import { GameClass } from '../../models/game-class.model';
import { ScoreClass } from '../../models/score-class.model';
import { GameService } from '../../services/game/game.service';
import { ScoreBoardService } from '../../services/scoreboard/score-board.service';
import { ScoreService } from '../../services/score/score.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  scores:ScoreClass[] =[]
  games:GameClass[] =[]
  scoresboards:ScoreBoard[] =[]
  scoresboardSummery:ScoreBoard[] =[]
  constructor(
    private scoreboardService:ScoreBoardService,
    private gameService:GameService,
    private scoreService:ScoreService,
    private userService:UserService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.scores =  this.scoreboardService.getLatestScoreBoard()
    this.scores.sort(function(a, b) {
    if ((a.homeTeamScore!=0 && b.awayTeamScore!=0) && (a.homeTeamScore == b.awayTeamScore)) {
        return ((a.homeTeamScore == b.awayTeamScore) && (a.createdOn > b.createdOn))  ? -1 : 1;
    }
    return a.createdOn > b.createdOn ? -1 : 1;
    });
    this.scores.forEach (item => { 
     let game = this.gameService.getGame(item.game_id) 
     debugger
     if(game?.status==true){
     let scoreboard = new ScoreBoard(item,game!)  
     this.scoresboards.push(scoreboard)
     }
    })
  }

  

  updateScore(gameId:number,homeScore:number,awayScore:number){
    let aciveUser = this.userService.getActiveUser()
    let newScore = new ScoreClass(0,gameId,homeScore,awayScore,new Date().toUTCString(),aciveUser.id)
    let scoreUpdate =  this.scoreService.insert(newScore)
    if(scoreUpdate){
      alert("Updated")
    }
  }

  refresh(){
    this.scoresboards=[]
    this.loadData()
  }

  stopGame(id:number){
   let status =  this.gameService.stop(id)
   if(status){
    alert("stopped")
   }
  }
  summery(){
    this.scoresboardSummery=[]
    this.scores =  this.scoreboardService.getLatestScoreBoard()
    this.scores.sort(function(a, b) {
    if ((a.homeTeamScore!=0 && b.awayTeamScore!=0) && (a.homeTeamScore == b.awayTeamScore)) {
        return ((a.homeTeamScore == b.awayTeamScore) && (a.createdOn > b.createdOn))  ? -1 : 1;
    }
    return a.createdOn > b.createdOn ? -1 : 1;
    });
    this.scores.forEach (item => { 
     let game = this.gameService.getGame(item.game_id) 
     let scoreboard = new ScoreBoard(item,game!)  
     this.scoresboardSummery.push(scoreboard)
 
    })
  }

}
