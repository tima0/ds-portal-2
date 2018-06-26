import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceCenterComponent } from './resource-center.component';

describe('ResourceCenterComponent', () => {
  let component: ResourceCenterComponent;
  let fixture: ComponentFixture<ResourceCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
