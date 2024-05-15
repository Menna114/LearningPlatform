import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInstructorAccountComponent } from './view-instructor-account.component';

describe('ViewInstructorAccountComponent', () => {
  let component: ViewInstructorAccountComponent;
  let fixture: ComponentFixture<ViewInstructorAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewInstructorAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewInstructorAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
