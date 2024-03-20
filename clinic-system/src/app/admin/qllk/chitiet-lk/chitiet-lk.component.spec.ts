import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietLkComponent } from './chitiet-lk.component';

describe('ChitietLkComponent', () => {
  let component: ChitietLkComponent;
  let fixture: ComponentFixture<ChitietLkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChitietLkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChitietLkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
