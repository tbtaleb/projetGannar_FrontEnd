import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedCandidatesComponent } from './recommended-candidates.component';

describe('RecommendedCandidatesComponent', () => {
  let component: RecommendedCandidatesComponent;
  let fixture: ComponentFixture<RecommendedCandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendedCandidatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendedCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
