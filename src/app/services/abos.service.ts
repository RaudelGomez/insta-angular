import { Injectable } from '@angular/core';
import { Subscriber } from '../interfaces/subscriber';

@Injectable({
  providedIn: 'root'
})

export class AbosService {
  subscribers: Subscriber[] = [
    { name: "Anna Müller", followed: true, followsYou: true },
    { name: "Bernd Schmidt", followed: false, followsYou: false },
    { name: "Clara Fischer", followed: true, followsYou: false },
    { name: "David Weber", followed: false, followsYou: true },
    { name: "Eva Becker", followed: true, followsYou: true }
  ];
  constructor() { }

  changeFollow(index:number){
    this.subscribers[index].followed = !this.subscribers[index].followed;
  }
}
