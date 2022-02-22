import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; //this is the URL

import { POSTS } from './posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  term: string;

  userRecords = [
    {
      id: 1,
      postone: 'Post 1',
      posttwo: 'Post 2',
      image: "assets/images/passport.jpg",
      title: 'San Francisco',       
      Post1: 'There are no words for how amazing San Francisco is. It is a beautiful city indeed. The only problem I have had there is I didnt stay long enough! There are many places to visit and plenty of things to do. We also visited the Golden Gate Bridge ofcourse. The Golden Gate Bridge is the iconic landmark of San Fran and the north entrance into downtown. One of the best ways to see it is by bike, so rent a pair of wheels for a quick jaunt to Sausalito and back.',
      Post2: 'For places to stay: The Inn at Union Square is the perfect pied-à-terre for those who want to explore San Francisco. This European-style hotel is located 1 block from Union Square Park and 4 blocks from the Powell Street BART Station San Francisco’s most historic hotel, Palace Hotel, dates back to 1875 and is located in Downtown SF. At one point in time, it was the largest and most costly hotel in the world. It is still timelessly beautiful. Even if you don’t stay here, come for afternoon high tea in the Garden Court and a cocktail at the Pied Piper.'
  },
  {
      id: 2,
      postone: 'Post 1',
      posttwo: 'Post 2',
      image: "assets/images/tower-bridge.jpg",
      title: 'London',
      Post1: 'Whilst a bit pricey, visiting London was the most amazing experience I have had to date! I recommend it to anyone from the US - we speak the same language, so its extremely easy to "get your feet wet" in the adventure that is overseas travel. Also, The capital offers amazing street food, supper clubs and restaurants for every budget and preference.',
      Post2: 'Whether you’re looking for art or architecture, food or football, London has been honed into a genuinely incredible city through its 2,000-year history. London is famous for its art, architecture, food and fashion, some of which it does better than anywhere else in the world. Given London’s history, it’s incredibly easy to pick out exquisite architecture throughout the city. Christ Church, opposite Spitalfields market, and Greenwich’s sprawling Royal Naval College showcase London’s Baroque architecture, while Gothic Revival in the capital can be seen at St Pancras train station.'
  },
  {
      id: 3,
      postone: 'Post 1',
      posttwo: 'Post 2',
      image: "assets/images/passport.jpg",
      title: 'Sydney',
      Post1: 'Even though it is home to more than 4 million people, I had no sense of the big city while there. People went out of their way to be friendly, helpful and courteous. The city itself has easily available restrooms, walking paths, shade areas, information booths and food! It was clean, calm and beautiful! The botanical garden was amazing! We would love to go back!',
      Post2: 'Sydneys vibrant dining scene, golden sand and robust cultural venues draw visitors back again and again. This is a city thats constantly evolving, with new rooftop bars, theatre shows and designer shops popping up at every turn. Plus, with diverse destinations at its doorstep, Sydney is the perfect base for day trips and weekends away.'
 
  },
  {
      id: 4,
      postone: 'Post 1',
      posttwo: 'Post 2',
      image: "assets/images/passport.jpg",
      title: 'Seattle',
      Post1: 'Pros: Fast paced. Good for young professionals who want to have a high paying career. Close to Canada. Getting to Hawaii or California is easy. Natural beauty, with snow capped mountains overlooking wide blue water. It is green, with plant life everywhere. Orcas and Sea Lions. Great food. Great coffee. Rich artistic community. Liberal. Diverse. Accepting. Well-educated populace. Adequate (but overrated) healthcare. Many options to do what you like to do, many groups to join.',
      Post2: 'Visit downtown Seattle: A clean, walkable city center with tree-filled public spaces, shopping, boutique bars and restaurants, and views across the Puget Sound. Also, Seattle’s ultra-modern side is evident in the neighborhood Belltown, where an active arts and partying scene thrives amid its shining skyscrapers.'

  },
  ];
 
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



