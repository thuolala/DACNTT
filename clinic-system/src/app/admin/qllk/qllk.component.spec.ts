import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QllkComponent } from './qllk.component';

describe('QllkComponent', () => {
  let component: QllkComponent;
  let fixture: ComponentFixture<QllkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QllkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QllkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
