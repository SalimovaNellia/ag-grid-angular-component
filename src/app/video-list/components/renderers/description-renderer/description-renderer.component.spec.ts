import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionRendererComponent } from './description-renderer.component';

const mockCellRendererParams = {
  value: "description"
}

describe('DescriptionRendererComponent', () => {
  let component: DescriptionRendererComponent;
  let fixture: ComponentFixture<DescriptionRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionRendererComponent ]
    }).overrideTemplate(DescriptionRendererComponent, "<span></span>")
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("agInit should assign value to description variable", () => {
    component.agInit(mockCellRendererParams as any);
    expect(component.description).toEqual(mockCellRendererParams.value);
  });

  it("refresh should return false", () => {
    expect(component.refresh()).toBeFalsy();
  });
});
