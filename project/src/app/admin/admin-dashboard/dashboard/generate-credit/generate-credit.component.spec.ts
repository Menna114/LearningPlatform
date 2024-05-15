import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateCreditComponent } from './generate-credit.component';

describe('GenerateCreditComponent', () => {
  let component: GenerateCreditComponent;
  let fixture: ComponentFixture<GenerateCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenerateCreditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
