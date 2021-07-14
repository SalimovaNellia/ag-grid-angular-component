import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {DataService} from "../shared /services/data.service";
import {map, switchMap, tap} from "rxjs/operators";

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  columnDefs = [
    { field: 'thumbnails' },
    { field: 'publishedAt'},
    { field: 'title'},
    { field: 'description'}
  ];

  rowData$: Observable<any>;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.rowData$ = this.dataService.getData()
      .pipe(
        map(data => data.items),
      );
  }
}
