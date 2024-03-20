import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlbnComponent } from './qlbn.component';

describe('QlbnComponent', () => {
  let component: QlbnComponent;
  let fixture: ComponentFixture<QlbnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QlbnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QlbnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
