export class ScoreClass {

   id:number
   game_id:number
   homeTeamScore:number
   awayTeamScore:number
   createdOn:string
   createdBy:number

  constructor(id :number, game_id:number,homeTeamScore:number,awayTeamScore:number,createdOn:string,createdBy:number){
    this.id=id;
    this.game_id=game_id;
    this.homeTeamScore=homeTeamScore;
    this.awayTeamScore=awayTeamScore;
    this.createdBy=createdBy;
    this.createdOn=createdOn;
  }
  
}
