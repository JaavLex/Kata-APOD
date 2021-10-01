import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiKeyInputComponent } from './api-key-input.component';

describe('ApiKeyInputComponent', () => {
  let component: ApiKeyInputComponent;
  let fixture: ComponentFixture<ApiKeyInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiKeyInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiKeyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
