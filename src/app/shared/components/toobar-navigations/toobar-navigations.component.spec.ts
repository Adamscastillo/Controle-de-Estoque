import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToobarNavigationsComponent } from './toobar-navigations.component';

describe('ToobarNavigationsComponent', () => {
  let component: ToobarNavigationsComponent;
  let fixture: ComponentFixture<ToobarNavigationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToobarNavigationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToobarNavigationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
