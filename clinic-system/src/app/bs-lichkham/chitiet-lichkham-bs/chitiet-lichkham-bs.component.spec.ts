import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietLichkhamComponentBS } from './chitiet-lichkham-bs.component';

describe('ChitietLichkhamBsComponent', () => {
  let component: ChitietLichkhamComponentBS;
  let fixture: ComponentFixture<ChitietLichkhamComponentBS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChitietLichkhamComponentBS]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChitietLichkhamComponentBS);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
