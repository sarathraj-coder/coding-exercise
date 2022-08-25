import { Component } from '@angular/core';
import { CollectionServiceService } from './memory/collection-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(){
  let  service =   CollectionServiceService.getInstance()
  }

  
}
