import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalVoteComponent } from './final-vote.component';

describe('FinalVoteComponent', () => {
  let component: FinalVoteComponent;
  let fixture: ComponentFixture<FinalVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalVoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
