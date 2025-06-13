import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTypeSignalsComponent } from './data-type-signals.component';

describe('DataTypeSignalsComponent', () => {
  let component: DataTypeSignalsComponent;
  let fixture: ComponentFixture<DataTypeSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataTypeSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataTypeSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
