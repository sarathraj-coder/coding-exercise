export class UserClass {
    private id:number
    private userName:string;

    constructor(id: number,  userName:string) {
        this.id = id;
        this.userName = userName;
      }

      getName(): string {
        return `${this.userName}`;
      }
}
