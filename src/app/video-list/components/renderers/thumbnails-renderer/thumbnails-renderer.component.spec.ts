import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailsRendererComponent } from './thumbnails-renderer.component';

describe('ThumbnailsRendererComponent', () => {
  let component: ThumbnailsRendererComponent;
  let fixture: ComponentFixture<ThumbnailsRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbnailsRendererComponent ]
    })
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
});
