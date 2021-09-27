import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodTitleComponent } from './apod-title.component';

describe('ApodTitleComponent', () => {
  let component: ApodTitleComponent;
  let fixture: ComponentFixture<ApodTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApodTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
