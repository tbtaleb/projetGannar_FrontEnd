import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCandidateComponent } from './single-candidate.component';

describe('SingleCandidateComponent', () => {
  let component: SingleCandidateComponent;
  let fixture: ComponentFixture<SingleCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleCandidateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
