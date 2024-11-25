import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingTextComponent } from './typing-text.component';

describe('TypingTextComponent', () => {
  let component: TypingTextComponent;
  let fixture: ComponentFixture<TypingTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypingTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypingTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
