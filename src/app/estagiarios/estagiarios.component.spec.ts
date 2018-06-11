import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstagiariosComponent } from './estagiarios.component';

describe('EstagiariosComponent', () => {
  let component: EstagiariosComponent;
  let fixture: ComponentFixture<EstagiariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstagiariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstagiariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
