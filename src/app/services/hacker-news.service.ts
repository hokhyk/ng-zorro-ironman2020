import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAvailableTags, IBaseStory, IResultList, IBaseStoryType, IHackerNews, Hit, IStory } from 'interfaces';
import { forkJoin, Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {

  BASE_URL = 'https://hacker-news.firebaseio.com/v0';

  BASE_URL_ALGOLIA = 'https://hn.algolia.com/api/v1';

  constructor(
    private http: HttpClient
  ) {
  }

  /**
   * To get newest stories
   */
  getStories(page: number = 1, pageSize: number = 20, type = IBaseStoryType.TOP): Observable<IResultList> {
    return this.http.get<any>(`${this.BASE_URL}/${type}.json?print=pretty`).pipe(
      mergeMap((ids) => forkJoin([of(ids.length), ...ids.slice((page - 1) * pageSize, page * pageSize).map(id => this.getStory(id))])),
      map(data => {
        return {
          total: data[0],
          data: data.slice(1)
        };
      })
    );
  }

  /**
   * To get story detail (comments)
   */
  getStory(itemId: number): Observable<IBaseStory> {
    return this.http.get<IBaseStory>(`${this.BASE_URL}/item/${itemId}.json?print=pretty`);
  }

  /**
   * =============== algolia.com ==================
   */
  getStoriesByAlgolia(query = '', tags = IAvailableTags.STORY): Observable<IHackerNews> {
    return this.http.get<IHackerNews>(`${this.BASE_URL_ALGOLIA}/search?query=${query}&tags=${tags}`);
  }

  getStoryByAlgolia(itemId: number): Observable<IStory> {
    return this.http.get<IStory>(`${this.BASE_URL_ALGOLIA}/items/${itemId}`);
  }

}