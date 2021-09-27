import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodContainerComponent } from './apod-container.component';

describe('ApodContainerComponent', () => {
  let component: ApodContainerComponent;
  let fixture: ComponentFixture<ApodContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApodContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
