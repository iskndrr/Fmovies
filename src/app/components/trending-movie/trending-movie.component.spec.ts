import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingMovieComponent } from './trending-movie.component';

describe('TrendingMovieComponent', () => {
  let component: TrendingMovieComponent;
  let fixture: ComponentFixture<TrendingMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingMovieComponent]
    });
    fixture = TestBed.createComponent(TrendingMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
