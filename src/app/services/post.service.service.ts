import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // private posts: Post[] = [
  //   {
  //     name: "Hans",
  //     img: "./assets/img/banana.jpg",
  //     like: 97
  //   },
  //   {
  //     name: "Mandy",
  //     img: "./assets/img/orange.jpg",
  //     like: 97
  //   },
  //   {
  //     name: "Nadine",
  //     img: "./assets/img/currant.jpg",
  //     like: 97
  //   },
  // ];

  private posts = new BehaviorSubject<Post[]>([
    {
      name: "Hans",
      img: "./assets/img/banana.jpg",
      like: ["rau", "peter"]
    },
    {
      name: "Mandy",
      img: "./assets/img/orange.jpg",
      like: []
    },
    {
      name: "Nadine",
      img: "./assets/img/currant.jpg",
      like: []
    },
  ]);;
  posts$ = this.posts.asObservable();

  constructor() { 
  }

  


}
