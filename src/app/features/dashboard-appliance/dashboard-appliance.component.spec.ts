import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardApplianceComponent } from './dashboard-appliance.component';

describe('DashboardApplianceComponent', () => {
  let component: DashboardApplianceComponent;
  let fixture: ComponentFixture<DashboardApplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardApplianceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardApplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
