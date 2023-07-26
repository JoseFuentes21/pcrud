import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEditaComponent } from './nuevo-edita.component';

describe('NuevoEditaComponent', () => {
  let component: NuevoEditaComponent;
  let fixture: ComponentFixture<NuevoEditaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoEditaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
