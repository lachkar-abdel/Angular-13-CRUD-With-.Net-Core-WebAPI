import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIndComponent } from './homeInd.component';


describe('HomeIndComponent', () => {
  let component: HomeIndComponent;
  let fixture: ComponentFixture<HomeIndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeIndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
