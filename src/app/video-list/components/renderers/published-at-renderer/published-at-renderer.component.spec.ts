import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedAtRendererComponent } from './published-at-renderer.component';

const mockCellRendererParams = {
  value: "publishedOn"
}

describe('PublishedAtRendererComponent', () => {
  let component: PublishedAtRendererComponent;
  let fixture: ComponentFixture<PublishedAtRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishedAtRendererComponent ]
    }).overrideTemplate(PublishedAtRendererComponent, "<span></span>")
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedAtRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("agInit should assign value to publishedOn variable", () => {
    component.agInit(mockCellRendererParams as any);
    expect(component.publishedOn).toEqual(mockCellRendererParams.value);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("refresh should return false", () => {
    expect(component.refresh()).toBeFalsy();
  });
});
