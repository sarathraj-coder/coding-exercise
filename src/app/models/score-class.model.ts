export class ScoreClass {

  private id:number
  private game_id:number
  private homeTeamScore:number
  private awayTeamScore:number
  private createdOn:Date
  private createdBy:number

  constructor(id :number, game_id:number,homeTeamScore:number,awayTeamScore:number,createdOn:Date,createdBy:number){
    this.id=id;
    this.game_id=game_id;
    this.homeTeamScore=homeTeamScore;
    this.awayTeamScore=awayTeamScore;
    this.createdBy=createdBy;
    this.createdOn=createdOn;
  }
  
}
