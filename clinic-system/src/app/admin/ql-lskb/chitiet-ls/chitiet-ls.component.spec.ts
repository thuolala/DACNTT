import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietLsComponent } from './chitiet-ls.component';

describe('ChitietLsComponent', () => {
  let component: ChitietLsComponent;
  let fixture: ComponentFixture<ChitietLsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChitietLsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChitietLsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
