import { Component, effect, inject, Injector, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { Comment, Post, PostService } from './services/post.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { firstValueFrom } from 'rxjs';
import { User, USERS } from './constants/users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListComponent, TodoDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  postService = inject(PostService);
  injector = inject(Injector);
  selectedPost = signal<Post | null>(null);
  comments = signal<Comment[]>([]);
  users = signal(USERS);
  selectedUser = signal<User>(USERS[0]);
  posts = signal<Post[]>([]);
  loadingPosts = signal<boolean>(false);
  loadingComments = signal<boolean>(false);

  getUserPosts = effect(async () => {
    const user = this.selectedUser();
    this.loadingPosts.set(true);
    const posts = await firstValueFrom(this.postService.getPosts(user.id));
    this.posts.set(posts);
    this.loadingPosts.set(false);
  });

  getPostComments = effect(async () => {
    const post = this.selectedPost();
    if (!post) {
      return;
    }
    this.loadingComments.set(true);
    const comments = await firstValueFrom(
      this.postService.getPostComments(post.id)
    );
    this.comments.set(comments);
    this.loadingComments.set(false);
  });

  postClick(post: Post) {
    this.selectedPost.set(post);
  }
}
