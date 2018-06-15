import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTableMotelComponent } from './admin-table-motel.component';

describe('AdminTableMotelComponent', () => {
  let component: AdminTableMotelComponent;
  let fixture: ComponentFixture<AdminTableMotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTableMotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTableMotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
