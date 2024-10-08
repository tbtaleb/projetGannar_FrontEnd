import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesComponentComponent } from './matches_component.component';

describe('MatchesComponentComponent', () => {
  let component: MatchesComponentComponent;
  let fixture: ComponentFixture<MatchesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchesComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
