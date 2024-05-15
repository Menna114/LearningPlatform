import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertInstructorIdComponent } from './insert-instructor-id.component';

describe('InsertInstructorIdComponent', () => {
  let component: InsertInstructorIdComponent;
  let fixture: ComponentFixture<InsertInstructorIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertInstructorIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertInstructorIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
