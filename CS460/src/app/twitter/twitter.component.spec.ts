import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterComponent } from './twitter.component';

describe('TwitterComponent', () => {
  let component: TwitterComponent;
  let fixture: ComponentFixture<TwitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwitterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
