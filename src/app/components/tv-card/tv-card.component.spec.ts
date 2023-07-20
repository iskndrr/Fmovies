import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvCardComponent } from './tv-card.component';

describe('TvCardComponent', () => {
  let component: TvCardComponent;
  let fixture: ComponentFixture<TvCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvCardComponent]
    });
    fixture = TestBed.createComponent(TvCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
