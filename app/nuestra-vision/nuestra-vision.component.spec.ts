import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestraVisionComponent } from './nuestra-vision.component';

describe('NuestraVisionComponent', () => {
  let component: NuestraVisionComponent;
  let fixture: ComponentFixture<NuestraVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestraVisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuestraVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
