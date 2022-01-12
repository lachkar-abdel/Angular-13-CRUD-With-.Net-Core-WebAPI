import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPdtComponent } from './show-pdt.component';

describe('ShowPdtComponent', () => {
  let component: ShowPdtComponent;
  let fixture: ComponentFixture<ShowPdtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPdtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
