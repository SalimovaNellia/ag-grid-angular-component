import {OperatorFunction} from "rxjs";
import {ApiData, VideoItemFromApi, VideoListItem} from "../../shared /interfaces";
import {map} from "rxjs/operators";

export function transformApiDataToRowData(): OperatorFunction<ApiData, VideoListItem[]> {
  return map<ApiData, VideoListItem[]>(({items}) => {
    return items.map((item: VideoItemFromApi) => ({
        thumbnail: item.snippet.thumbnails.default,
        publishedOn: item.snippet.publishedAt,
        videoTitle: {title: item.snippet.title, videoId: item.id.videoId},
        description: item.snippet.description,
      })
    );
  });
}
