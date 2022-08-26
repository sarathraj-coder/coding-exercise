import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScoreboardComponent } from './component/scoreboard/scoreboard.component';
import { GameComponent } from './component/game/game.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user/user.service';
import { ScoreService } from './services/score/score.service';
import { ScoreBoardService } from './services/scoreboard/score-board.service';
import { GameService } from './services/game/game.service';

@NgModule({
  declarations: [
    AppComponent,
    ScoreboardComponent,
    GameComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:'IGame',useClass:GameService},
    {provide:'IScore',useClass:ScoreService},
    {provide:'IScoreBoard',useClass:ScoreBoardService},
    {provide:'IUser',useClass:UserService}
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
