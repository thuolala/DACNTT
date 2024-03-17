import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietLichkhamComponent } from './chitiet-lichkham.component';

describe('ChitietLichkhamComponent', () => {
  let component: ChitietLichkhamComponent;
  let fixture: ComponentFixture<ChitietLichkhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChitietLichkhamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChitietLichkhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
