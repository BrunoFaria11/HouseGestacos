import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalInfoSectionComponent } from './additional-info-section.component';

describe('AdditionalInfoSectionComponent', () => {
  let component: AdditionalInfoSectionComponent;
  let fixture: ComponentFixture<AdditionalInfoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalInfoSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalInfoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
