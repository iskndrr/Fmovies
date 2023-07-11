import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpComingMoviesComponent } from './up-coming-movies.component';

describe('UpComingMoviesComponent', () => {
  let component: UpComingMoviesComponent;
  let fixture: ComponentFixture<UpComingMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpComingMoviesComponent]
    });
    fixture = TestBed.createComponent(UpComingMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
