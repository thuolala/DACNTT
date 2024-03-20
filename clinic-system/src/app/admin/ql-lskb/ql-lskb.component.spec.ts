import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlLskbComponent } from './ql-lskb.component';

describe('QlLskbComponent', () => {
  let component: QlLskbComponent;
  let fixture: ComponentFixture<QlLskbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QlLskbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QlLskbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
