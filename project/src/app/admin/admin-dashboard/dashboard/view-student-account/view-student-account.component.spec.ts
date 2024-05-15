import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentAccountComponent } from './view-student-account.component';

describe('ViewStudentAccountComponent', () => {
  let component: ViewStudentAccountComponent;
  let fixture: ComponentFixture<ViewStudentAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewStudentAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewStudentAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
