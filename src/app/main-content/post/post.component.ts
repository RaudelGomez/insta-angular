import { Component, Input} from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { PostService } from '../../services/post.service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input()index!:number;
  @Input()post!:Post;
  commentText!:string;
  // @Input()post:Post = {
  //   name: "",
  //   img: "",
  //   like: []
  // };

  constructor( private postService: PostService){ }

  toggleLike(index: number){
    this.postService.addLike(index);
    //console.log(this.allPosts$);
  }

  hasLiked(index:number){
    return this.postService.hasThePostLike(index);
  }

  addComment(index:number, comment:string){
    this.postService.addComment(index, comment);
    this.commentText = "";
  }
}



