export interface IVideo {
  etag: string,
  id: IVideoId,
  kind: string,
  snippet: ISnippet,
}

export interface ISnippet {
  channelId: string,
  channelTitle: string,
  description: string,
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
