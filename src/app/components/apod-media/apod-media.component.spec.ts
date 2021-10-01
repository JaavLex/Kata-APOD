import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodMediaComponent } from './apod-media.component';

describe('ApodMediaComponent', () => {
  let component: ApodMediaComponent;
  let fixture: ComponentFixture<ApodMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApodMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
