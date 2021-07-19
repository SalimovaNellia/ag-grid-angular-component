import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedAtRendererComponent } from './published-at-renderer.component';

describe('PublishedAtRendererComponent', () => {
  let component: PublishedAtRendererComponent;
  let fixture: ComponentFixture<PublishedAtRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishedAtRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedAtRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
