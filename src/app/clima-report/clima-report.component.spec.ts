import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimaReportComponent } from './clima-report.component';

describe('ClimaReportComponent', () => {
  let component: ClimaReportComponent;
  let fixture: ComponentFixture<ClimaReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimaReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClimaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
