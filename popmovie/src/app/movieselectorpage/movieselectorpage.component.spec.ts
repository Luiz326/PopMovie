import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieselectorpageComponent } from './movieselectorpage.component';

describe('MovieselectorpageComponent', () => {
  let component: MovieselectorpageComponent;
  let fixture: ComponentFixture<MovieselectorpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieselectorpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieselectorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
