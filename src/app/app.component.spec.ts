import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { DashboardService } from './dashboard.service';

describe('AppComponent', () => {

  let service: DashboardService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    service = TestBed.inject(DashboardService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});
