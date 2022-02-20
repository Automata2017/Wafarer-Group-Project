import { Component, OnInit } from '@angular/core';
import { POSTS } from './posts/posts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit  {
  posts = POSTS;

  constructor(private router: Router) {}

  ngOnInit() {}

  isCityRoute() {
    return this.router.url === '/cities';
  }
}






//  imagesArr: string[] = Array().fill("../../assets/images/passport.jpg")



