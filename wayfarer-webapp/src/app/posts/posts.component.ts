import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; //this is the URL

import { POSTS } from './posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
 
 postIndex: string|null = ''; 
 post: any;


  constructor(private route: ActivatedRoute) { }

ngOnInit(): void {
  this.route.paramMap
  .subscribe(params => {
    this.post = POSTS.find(post => {
      let paramId: string = params.get('id') || '';
      return post.id === parseInt(paramId);
      })


    })
  }

}

