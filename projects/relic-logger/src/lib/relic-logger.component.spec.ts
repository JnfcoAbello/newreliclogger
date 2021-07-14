import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelicLoggerComponent } from './relic-logger.component';

describe('RelicLoggerComponent', () => {
  let component: RelicLoggerComponent;
  let fixture: ComponentFixture<RelicLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelicLoggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelicLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
