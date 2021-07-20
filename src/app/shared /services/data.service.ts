import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyB9OCg3K0nz413_PyhUevuN4jQtjq0C7VQ';

  private mockUrl = 'assets/mockData.json';

  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?key=${this.apiKey}&maxResults=10&type=video&part=snippet&q=john`);
    /*if 'exceeded request quota' error in youtube data API appeared, use the method below*/
    // return this.http.get(this.mockUrl)
  }

}
