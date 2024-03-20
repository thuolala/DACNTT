import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlbsComponent } from './qlbs.component';

describe('QlbsComponent', () => {
  let component: QlbsComponent;
  let fixture: ComponentFixture<QlbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QlbsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QlbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
