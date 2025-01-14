import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCategoriesComponent } from './update-categories.component';

describe('UpdateCategoriesComponent', () => {
  let component: UpdateCategoriesComponent;
  let fixture: ComponentFixture<UpdateCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
