import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';

import { INITIAL_APP_STATE } from '../../store/root/root.config';
import { VideoListService } from './video-list.service';
import { AppState } from '../../store/root/root.entity';


describe('VideoListService', () => {
  let service: VideoListService;
  let mockStore: MockStore<AppState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({initialState: INITIAL_APP_STATE})
      ]
    });
    service = TestBed.inject(VideoListService);
    mockStore = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("dispatchChangeGeneralCheckbox should dispatch GridParamsChangeGeneralCheckbox action", () => {
    const spy = spyOn(mockStore, "dispatch");
    service.dispatchChangeGeneralCheckbox(false);
    expect(spy).toHaveBeenCalledTimes(1);
  })

  it("dispatchGridParamsRemoveCheckboxColumn should dispatch GridParamsRemoveCheckboxColumn action", () => {
    const spy = spyOn(mockStore, "dispatch");
    service.dispatchGridParamsRemoveCheckboxColumn();
    expect(spy).toHaveBeenCalledTimes(1);
  })

  it("dispatchGridParamsAddCheckboxColumn should dispatch GridParamsAddCheckboxColumn action", () => {
    const spy = spyOn(mockStore, "dispatch");
    service.dispatchGridParamsAddCheckboxColumn();
    expect(spy).toHaveBeenCalledTimes(1);
  })
});
