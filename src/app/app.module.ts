import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScoreComponent } from './component/score/score.component';
import { ScoreboardComponent } from './component/scoreboard/scoreboard.component';
import { GameComponent } from './component/game/game.component';
import { UserComponent } from './component/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    ScoreboardComponent,
    GameComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
