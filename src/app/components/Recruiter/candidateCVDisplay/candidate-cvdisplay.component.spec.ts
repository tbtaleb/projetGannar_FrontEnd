import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateCVDisplayComponent } from './candidate-cvdisplay.component';

describe('CandidateCVDisplayComponent', () => {
  let component: CandidateCVDisplayComponent;
  let fixture: ComponentFixture<CandidateCVDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateCVDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateCVDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
