import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietBsComponent } from './chitiet-bs.component';

describe('ChitietBsComponent', () => {
  let component: ChitietBsComponent;
  let fixture: ComponentFixture<ChitietBsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChitietBsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChitietBsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
