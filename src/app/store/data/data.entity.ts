import { VideoListItem } from '../../shared /interfaces';

export interface DataState {
  videoData: VideoListItem[] | null;
  loading: boolean;
  error: boolean;
}
