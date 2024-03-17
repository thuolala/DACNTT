import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietLichkhamBsComponent } from './chitiet-lichkham-bs.component';

describe('ChitietLichkhamBsComponent', () => {
  let component: ChitietLichkhamBsComponent;
  let fixture: ComponentFixture<ChitietLichkhamBsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChitietLichkhamBsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChitietLichkhamBsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
