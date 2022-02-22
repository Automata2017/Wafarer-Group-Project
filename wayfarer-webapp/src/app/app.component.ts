import { Component, OnInit } from '@angular/core';
import { POSTS } from './posts/posts';
import { Router } from '@angular/router';
// import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  posts = POSTS;

  constructor(private router: Router) {}

  ngOnInit() {}

  isCityRoute() {
    return this.router.url === '/cities';
  }
}
