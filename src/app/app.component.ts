import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cards';
  posts = [
    {
      title:'Neat tree',
      imageUrl:"assets/tree.jpeg",
      username:"nature",
      content:"the best tree in my backyard"
    },
    {
      title:'Mountain',
      imageUrl:"assets/mountain.jpeg",
      username:"mountainlover",
      content:"the best view from this mountain"
    },
    {
      title:'Biker',
      imageUrl:"assets/biking.jpeg",
      username:"bikelover",
      content:"the best ride is in evening"
    }
  ]
}
