import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypingTextComponent } from '../typing-text/typing-text.component';
import { HomepageComponent } from './homepage.component';
import { routes } from '../../app.routes';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
