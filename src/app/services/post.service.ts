import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

@Injectable({
  providedIn: 'root',
})
export class PostService {
  http = inject(HttpClient);
  baseUrl = 'https://jsonplaceholder.typicode.com';

  getPosts() {
    return this.http.get<Post[]>(`${this.baseUrl}/posts`);
  }

  getPost(id: number) {
    return this.http.get<Post>(`${this.baseUrl}/posts/${id}`);
  }
}
