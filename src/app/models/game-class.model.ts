export class GameClass {
   private id:number;
   private homeTeam:string;
   private awayTeam:string;
   private status:Boolean;
   private createdOn:Date;
   private createdBy:number;
   private updatedOn:Date;
   private updatedBy:number;

  
   constructor(id:number,homeTeam:string,awayTeam:string,status:Boolean,
    createdOn:Date,createdBy:number,updatedOn:Date,updatedBy:number){
        this.id=id
        this.homeTeam=homeTeam
        this.awayTeam=awayTeam
        this.status=status
        this.createdOn=createdOn
        this.createdBy=createdBy
        this.updatedOn=updatedOn
        this.updatedBy=updatedBy
    }
}
