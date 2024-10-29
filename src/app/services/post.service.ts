import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type Comment = {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
};

@Injectable({
  providedIn: 'root',
})
export class PostService {
  http = inject(HttpClient);
  baseUrl = 'https://jsonplaceholder.typicode.com';

  getPosts(userId: number) {
    return this.http.get<Post[]>(`${this.baseUrl}/users/${userId}/posts`);
  }

  getPost(id: number) {
    return this.http.get<Post>(`${this.baseUrl}/posts/${id}`);
  }

  getPostComments(postId: number) {
    return this.http.get<Comment[]>(`${this.baseUrl}/posts/${postId}/comments`);
  }
}
