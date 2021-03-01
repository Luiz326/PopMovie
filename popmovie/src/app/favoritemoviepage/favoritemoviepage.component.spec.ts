import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritemoviepageComponent } from './favoritemoviepage.component';

describe('FavoritemoviepageComponent', () => {
  let component: FavoritemoviepageComponent;
  let fixture: ComponentFixture<FavoritemoviepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritemoviepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritemoviepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
