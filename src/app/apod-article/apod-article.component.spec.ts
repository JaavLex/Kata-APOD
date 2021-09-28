import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodArticleComponent } from './apod-article.component';

describe('ApodArticleComponent', () => {
  let component: ApodArticleComponent;
  let fixture: ComponentFixture<ApodArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApodArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
