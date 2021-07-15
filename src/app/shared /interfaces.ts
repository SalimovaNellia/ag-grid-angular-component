export interface ApiData {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: IPageInfo;
  items: VideoItemFromApi[];
}

export interface IVideo {
  etag: string,
  id: IVideoId,
  kind: string,
  snippet: ISnippet,
}

export interface VideoListItem {
  checkbox?: boolean;
  thumbnail: IThumbnailParams;
  publishedOn: string;
  videoTitle: IVideoTitle;
  description: string;
}

export interface IVideoTitle {
  title: string;
  videoId: string;
}

export interface ISnippet {
  channelId: string,
  channelTitle: string,
  description: string,
  title: string,
  liveBroadcastContent: string,
  publishTime: string,
  publishedAt: string,
  thumbnails: IThumbnails
}

export interface IThumbnails {
  default: IThumbnailParams,
  high: IThumbnailParams
  medium: IThumbnailParams
}

export interface IThumbnailParams {
  url: string,
  width: number,
  height: number
}

export interface IVideoId {
  kind: string,
  videoId: string
}

export interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface VideoItemFromApi {
  kind?: 'youtube#searchResult';
  etag: string;
  id: IVideoId;
  snippet: ISnippet;
}
