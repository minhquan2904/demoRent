import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapServiceComponent } from './map-service.component';

describe('MapServiceComponent', () => {
  let component: MapServiceComponent;
  let fixture: ComponentFixture<MapServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
