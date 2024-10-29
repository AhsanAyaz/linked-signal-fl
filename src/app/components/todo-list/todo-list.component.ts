import { Component, input } from '@angular/core';
import { Post } from '../../services/post.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  posts = input<Post[]>();
}
