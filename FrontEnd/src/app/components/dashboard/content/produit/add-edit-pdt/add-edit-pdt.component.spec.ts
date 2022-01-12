import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPdtComponent } from './add-edit-pdt.component';

describe('AddEditPdtComponent', () => {
  let component: AddEditPdtComponent;
  let fixture: ComponentFixture<AddEditPdtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPdtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
