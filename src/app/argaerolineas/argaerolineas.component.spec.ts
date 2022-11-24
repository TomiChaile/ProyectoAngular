import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgaerolineasComponent } from './argaerolineas.component';

describe('ArgaerolineasComponent', () => {
  let component: ArgaerolineasComponent;
  let fixture: ComponentFixture<ArgaerolineasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArgaerolineasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArgaerolineasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
