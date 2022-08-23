export class GameClass {
    id:number;
    homeTeam:string;
    awayTeam:string;
    status:Boolean;
    createdOn:string;
    updatedOn:string;
    createdBy:number;
    updatedBy:number;

   constructor(id:number,homeTeam:string,awayTeam:string,status:Boolean,
    createdOn:string,createdBy:number,updatedOn:string,updatedBy:number){
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
