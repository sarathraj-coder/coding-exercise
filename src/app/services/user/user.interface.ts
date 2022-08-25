import { ScoreClass } from "src/app/models/score-class.model";
import { UserClass } from "src/app/models/user-class.model";


export interface IUser {
    getActiveUser(): UserClass
    getUsers(): Array<UserClass>
}