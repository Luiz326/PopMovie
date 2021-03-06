import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsmoviepageComponent } from './detailsmoviepage.component';

describe('DetailsmoviepageComponent', () => {
  let component: DetailsmoviepageComponent;
  let fixture: ComponentFixture<DetailsmoviepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsmoviepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsmoviepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
