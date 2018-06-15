import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapMarkerMoveComponent } from './map-marker-move.component';

describe('MapMarkerMoveComponent', () => {
  let component: MapMarkerMoveComponent;
  let fixture: ComponentFixture<MapMarkerMoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapMarkerMoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapMarkerMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
