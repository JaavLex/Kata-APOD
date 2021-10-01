import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodNavButtonComponent } from './apod-nav-button.component';

describe('ApodNavButtonComponent', () => {
  let component: ApodNavButtonComponent;
  let fixture: ComponentFixture<ApodNavButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApodNavButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodNavButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
