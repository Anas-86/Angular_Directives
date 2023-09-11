import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXQlMjB0aGUlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60'
    },
    {
      title: 'Audi',
      url: 'https://images.unsplash.com/photo-1503507420689-7b961cc77da5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXVkaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60aCdk'
    },
    {
      title: 'smooth',
      url: 'https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGVzbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=60'
    },
    {
      title: 'Volkswagen',
      url: 'https://images.unsplash.com/photo-1619828701848-d757fcdd604d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dnd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=60'
    },
    {
      title: 'BMW',
      url: 'https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym13fGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXQlMjB0aGUlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60'
    },
    {
      title: 'Audi',
      url: 'https://images.unsplash.com/photo-1503507420689-7b961cc77da5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXVkaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60aCdk'
    },
    {
      title: 'smooth',
      url: 'https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGVzbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=60'
    },
    {
      title: 'Volkswagen',
      url: 'https://images.unsplash.com/photo-1619828701848-d757fcdd604d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dnd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=60'
    },
    {
      title: 'BMW',
      url: 'https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym13fGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=60'
    }
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
