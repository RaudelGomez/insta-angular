import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';
import { CommonModule } from '@angular/common';
import { PostService } from '../services/post.service.service';
import { Post } from '../interfaces/post.interface';
import { filter, Observable } from 'rxjs';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, PostComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

  allPosts$: Observable<Post[]> = this.postService.allPosts;
  
  constructor( private postService: PostService){
    
  }
  
}
