import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialInfoSectionComponent } from './initial-info-section.component';

describe('InitialInfoSectionComponent', () => {
  let component: InitialInfoSectionComponent;
  let fixture: ComponentFixture<InitialInfoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialInfoSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialInfoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
