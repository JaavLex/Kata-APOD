import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodDescComponent } from './apod-desc.component';

describe('ApodDescComponent', () => {
  let component: ApodDescComponent;
  let fixture: ComponentFixture<ApodDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApodDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
