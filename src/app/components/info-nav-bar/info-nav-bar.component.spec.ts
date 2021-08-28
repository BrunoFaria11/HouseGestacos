import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoNavBarComponent } from './info-nav-bar.component';

describe('InfoNavBarComponent', () => {
  let component: InfoNavBarComponent;
  let fixture: ComponentFixture<InfoNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
