import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCadeauxComponent } from './create-cadeaux.component';

describe('CreateCadeauxComponent', () => {
  let component: CreateCadeauxComponent;
  let fixture: ComponentFixture<CreateCadeauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCadeauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCadeauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
