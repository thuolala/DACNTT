import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemLkComponent } from './them-lk.component';

describe('ThemLkComponent', () => {
  let component: ThemLkComponent;
  let fixture: ComponentFixture<ThemLkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemLkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemLkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
