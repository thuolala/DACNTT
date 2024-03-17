import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsLickkhamComponent } from './bs-lichkham.component';

describe('BsLickkhamComponent', () => {
  let component: BsLickkhamComponent;
  let fixture: ComponentFixture<BsLickkhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BsLickkhamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BsLickkhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
