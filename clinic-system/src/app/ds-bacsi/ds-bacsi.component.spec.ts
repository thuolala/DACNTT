import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorListComponent } from './ds-bacsi.component';

describe('DoctorListComponent', () => {
  let component: DoctorListComponent;
  let fixture: ComponentFixture<DoctorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
