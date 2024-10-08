import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  private posts: Post[] = [
    {
      name: "Hans",
      img: "./assets/img/banana.jpg",
      like: ["Raudel"],
      comments: ["hallo"]
    },
    {
      name: "Mandy",
      img: "./assets/img/orange.jpg",
      like: ["Pepe", "Robert"],
      comments: []
    },
    {
      name: "Nadine",
      img: "./assets/img/currant.jpg",
      like: [],
      comments: []
    },
  ];

  private posts$: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>(this.posts);
  allPosts: Observable<Post[]> = this.posts$.asObservable();

  private user:string = "Raudel"

  constructor() {}

  // get allPosts(){
  //   return this.posts$.asObservable();
  // }

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
    this.posts$.next(this.posts);
  }

  hasThePostLike(index:number){
    return this.posts[index].like.findIndex(name => name == this.userLogged);
  }

  addComment(index:number, comment:string){
    this.posts[index].comments.push(comment);
    this.posts$.next(this.posts);
  }

  

  


}
