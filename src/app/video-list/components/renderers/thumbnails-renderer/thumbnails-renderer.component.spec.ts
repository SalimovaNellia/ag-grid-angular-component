import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailsRendererComponent } from './thumbnails-renderer.component';

const mockCellRendererParams = {
  value: {
    url: 'https://i.ytimg.com/vi/3fumBcKC6RE/default.jpg',
    width: 50,
    height: 50
  }
}

describe('ThumbnailsRendererComponent', () => {
  let component: ThumbnailsRendererComponent;
  let fixture: ComponentFixture<ThumbnailsRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbnailsRendererComponent ]
    }).overrideTemplate(ThumbnailsRendererComponent, "<span></span>")
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailsRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("agInit should assign value to thumbnailParams variable", () => {
    component.agInit(mockCellRendererParams as any);
    expect(component.thumbnailParams).toEqual(mockCellRendererParams.value);
  });

});
