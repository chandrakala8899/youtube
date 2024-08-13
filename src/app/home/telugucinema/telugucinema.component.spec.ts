import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelugucinemaComponent } from './telugucinema.component';

describe('TelugucinemaComponent', () => {
  let component: TelugucinemaComponent;
  let fixture: ComponentFixture<TelugucinemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelugucinemaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelugucinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
