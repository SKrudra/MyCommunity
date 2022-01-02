import { data } from './data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  private _data = data;

  get posts() {
    return this._data;
  }

  post(id: number) {
    return this._data.find(post => { return post.post_id === id});
  }
}
