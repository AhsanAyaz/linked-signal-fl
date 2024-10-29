import { Component, input, output, signal } from '@angular/core';
import { Post } from '../../services/post.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  selectedPost = input<Post | null>();
  posts = input<Post[]>();
  postChanged = output<Post>();

  selectPost(post: Post) {
    this.postChanged.emit(post);
  }
}
