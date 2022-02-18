import { Component } from '@angular/core';
import { POSTS } from './posts/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
 posts = POSTS;
 imagesArr: string[] = Array().fill("../../assets/images/passport.jpg")

}

