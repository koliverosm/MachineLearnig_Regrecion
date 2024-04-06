import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardPrediccionComponent } from './admin-dashboard-prediccion.component';

describe('AdminDashboardPrediccionComponent', () => {
  let component: AdminDashboardPrediccionComponent;
  let fixture: ComponentFixture<AdminDashboardPrediccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDashboardPrediccionComponent]
    });
    fixture = TestBed.createComponent(AdminDashboardPrediccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
