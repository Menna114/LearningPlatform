import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TestCenterRepComponent } from './testcenterrep.component';

describe('TestCenterRepComponent', () => {
  let component: TestCenterRepComponent;
  let fixture: ComponentFixture<TestCenterRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCenterRepComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCenterRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
