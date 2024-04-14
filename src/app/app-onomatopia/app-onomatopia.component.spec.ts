import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOnomatopiaComponent } from './app-onomatopia.component';

describe('AppOnomatopiaComponent', () => {
  let component: AppOnomatopiaComponent;
  let fixture: ComponentFixture<AppOnomatopiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppOnomatopiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppOnomatopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
