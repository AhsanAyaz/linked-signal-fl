import { Component, input } from '@angular/core';
import { Comment, Post } from '../../services/post.service';

@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [],
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.scss',
})
export class TodoDetailsComponent {
  loadingComments = input.required<boolean>();
  post = input.required<Post>();
  comments = input.required<Comment[]>();
}
