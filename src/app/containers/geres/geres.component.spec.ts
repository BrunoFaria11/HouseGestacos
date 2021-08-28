import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeresComponent } from './geres.component';

describe('GeresComponent', () => {
  let component: GeresComponent;
  let fixture: ComponentFixture<GeresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
