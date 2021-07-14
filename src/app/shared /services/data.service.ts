import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyCo6plYZdmt9sWxQFY3Vte3HuM4BWdsBn8';

  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?key=${this.apiKey}&maxResults=10&type=video&part=snippet&q=john`);
  }

}
