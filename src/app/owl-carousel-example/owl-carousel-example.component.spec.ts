import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlCarouselExampleComponent } from './owl-carousel-example.component';

describe('OwlCarouselExampleComponent', () => {
  let component: OwlCarouselExampleComponent;
  let fixture: ComponentFixture<OwlCarouselExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwlCarouselExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlCarouselExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
