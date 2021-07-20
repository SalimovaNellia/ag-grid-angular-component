import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiData, VideoItemFromApi, VideoListItem } from '../../shared /interfaces';

export function transformApiDataToRowData(): OperatorFunction<ApiData, VideoListItem[]> {
  return map<ApiData, VideoListItem[]>(({items}) => (mapApiData(items)))
}

export function mapApiData(items: VideoItemFromApi[]) {
  return items.map((item: VideoItemFromApi) => ({
    thumbnail: item.snippet.thumbnails.default,
    publishedOn: item.snippet.publishedAt,
    videoTitle: {title: item.snippet.title, videoId: item.id.videoId},
    description: item.snippet.description,
  }))
}
