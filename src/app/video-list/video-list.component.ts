import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { filter, tap } from 'rxjs/operators';
import { Store} from '@ngrx/store';
import { Observable} from 'rxjs';

import { PublishedAtRendererComponent } from './componetns/published-at-renderer/published-at-renderer.component';
import { DescriptionRendererComponent } from './componetns/description-renderer/description-renderer.component';
import { ThumbnailsRendererComponent } from "./componetns/thumbnails-renderer/thumbnails-renderer.component";
import { TitleRendererComponent } from './componetns/title-renderer/title-renderer.component';
import { selectVideosList, State } from '../store/data.state';
import { VideoListItem } from '../shared /interfaces';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  gridOptions: GridOptions = {
    defaultColDef: {
      flex: 1,
      autoHeight: true,
      resizable: true,
    }
  };

  columnDefs = [
    { field: 'thumbnail', headerName: '', cellRendererFramework: ThumbnailsRendererComponent },
    { field: 'publishedOn', cellRendererFramework: PublishedAtRendererComponent },
    { field: 'videoTitle', cellRendererFramework: TitleRendererComponent },
    { field: 'description', cellRendererFramework: DescriptionRendererComponent }
  ];

  rowData$: Observable<VideoListItem[] | null>;

  constructor(private store: Store<State>) {
    this.rowData$ = store.select(selectVideosList).pipe(
      filter(value => value !== null),
      tap(items => console.log(items))
    );
  }

  ngOnInit(): void {
  }

}
