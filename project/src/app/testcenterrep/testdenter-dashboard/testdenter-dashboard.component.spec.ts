import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdenterDashboardComponent } from './testdenter-dashboard.component';

describe('TestdenterDashboardComponent', () => {
  let component: TestdenterDashboardComponent;
  let fixture: ComponentFixture<TestdenterDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestdenterDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestdenterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
