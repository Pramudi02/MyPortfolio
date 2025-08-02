import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtSectionComponent } from './art-section.component';

describe('ArtSectionComponent', () => {
  let component: ArtSectionComponent;
  let fixture: ComponentFixture<ArtSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
