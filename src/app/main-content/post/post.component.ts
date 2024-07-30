import { Component, Input} from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { PostService } from '../../services/post.service.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input()index:number = 0;
  @Input()post:Post = {
    name: "",
    img: "",
    like: []
  };

  constructor( private postService: PostService){ }

  toggleLike(index: number){
    this.postService.addLike(index);
    //console.log(this.allPosts$);
  }

  hasLiked(index:number){
    return this.postService.hasThePostLike(index);
  }
}



