import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';
import { CommonModule } from '@angular/common';
import { PostService } from '../services/post.service.service';
import { Post } from '../interfaces/post.interface';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { SubscribersComponent } from './subscribers/subscribers.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, PostComponent, RouterModule, SubscribersComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

  
  constructor( private postService: PostService){ }
  
  allPosts$: Observable<Post[]> = this.postService.allPosts;
  
}
