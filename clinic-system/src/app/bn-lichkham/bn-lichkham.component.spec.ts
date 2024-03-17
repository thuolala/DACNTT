import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnLichkhamComponent } from './bn-lichkham.component';

describe('BnLichkhamComponent', () => {
  let component: BnLichkhamComponent;
  let fixture: ComponentFixture<BnLichkhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnLichkhamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnLichkhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
