import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdeliveryComponent } from './newdelivery.component';

describe('NewdeliveryComponent', () => {
  let component: NewdeliveryComponent;
  let fixture: ComponentFixture<NewdeliveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewdeliveryComponent]
    });
    fixture = TestBed.createComponent(NewdeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
