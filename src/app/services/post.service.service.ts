import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  private posts: Post[] = [
    {
          name: "Hans",
          img: "./assets/img/banana.jpg",
          like: ["Raudel"]
        },
        {
          name: "Mandy",
          img: "./assets/img/orange.jpg",
          like: ["Pepe", "Robert"]
        },
        {
          name: "Nadine",
          img: "./assets/img/currant.jpg",
          like: []
        },
  ];

  private posts$: BehaviorSubject<Post[]> ;

  private user:string = "Raudel"

  constructor() { 
    this.posts$ = new BehaviorSubject<Post[]>(this.posts);
  }

  get allPosts(){
    return this.posts$.asObservable();
  }

  get userLogged(){
    return this.user;
  }

  addLike(index:number){
    let indexFound = this.hasThePostLike(index);
    if(indexFound >= 0){
      this.posts[index].like.splice(indexFound, 1);
    }else{
      this.posts[index].like.push(this.user);
    }
  }

  hasThePostLike(index:number){
    return this.posts[index].like.findIndex(name => name == this.userLogged);
  }

  

  


}
