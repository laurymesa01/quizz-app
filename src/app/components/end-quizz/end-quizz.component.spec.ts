import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndQuizzComponent } from './end-quizz.component';

describe('EndQuizzComponent', () => {
  let component: EndQuizzComponent;
  let fixture: ComponentFixture<EndQuizzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndQuizzComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EndQuizzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
