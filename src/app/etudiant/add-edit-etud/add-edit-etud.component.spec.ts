import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEtudComponent } from './add-edit-etud.component';

describe('AddEditEtudComponent', () => {
  let component: AddEditEtudComponent;
  let fixture: ComponentFixture<AddEditEtudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEtudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEtudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
