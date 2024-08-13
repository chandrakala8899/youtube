import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedvediosComponent } from './likedvedios.component';

describe('LikedvediosComponent', () => {
  let component: LikedvediosComponent;
  let fixture: ComponentFixture<LikedvediosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LikedvediosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikedvediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
