import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietBnComponent } from './chitiet-bn.component';

describe('ChitietBnComponent', () => {
  let component: ChitietBnComponent;
  let fixture: ComponentFixture<ChitietBnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChitietBnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChitietBnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
