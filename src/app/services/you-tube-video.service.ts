import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YouTubeVideoService {
  url = 'https://www.googleapis.com/youtube/v3/search?q='
  key = '&key=AIzaSyDrsU4lxdSRWmO053F7KinyzysDAwAMf4U&part=snippet&type=video&maxResults=10'
  globalSearcKey :string = ''
  constructor(private httpClient: HttpClient) { }

  getYouTubeVideo(data: string) {
    return this.httpClient.get(
      `${this.url}${data}${this.key}`
    )
  }
}
