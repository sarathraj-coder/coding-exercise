import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScoreboardComponent } from './component/scoreboard/scoreboard.component';
import { GameComponent } from './component/game/game.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
