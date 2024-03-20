import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemBacsiComponent } from './them-bacsi.component';

describe('ThemBacsiComponent', () => {
  let component: ThemBacsiComponent;
  let fixture: ComponentFixture<ThemBacsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemBacsiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemBacsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
