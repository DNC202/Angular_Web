import { Injectable } from '@angular/core';
import { Tour } from '../../models/tour/tour';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  constructor() { }

  getAllTours():Tour[] {
    return [
      {
        id: 1,
        title: 'Mountain Trek',
        rating: 4.7,
        price: 99.99,
        duration: '5 days 4 nights',
        thumbnail: "https://travelwp.physcode.com/main-demo/wp-content/uploads/sites/7/2016/11/c9f347c4-8b17-47b5-8594-a6947299d51f-430x323.jpg"
      },
      {
        id: 2,
        title: 'Mountain Trek',
        rating: 4.7,
        price: 99.99,
        duration: '5 days 4 nights',
        thumbnail: "https://travelwp.physcode.com/main-demo/wp-content/uploads/sites/7/2016/11/c9f347c4-8b17-47b5-8594-a6947299d51f-430x323.jpg"
      },
      {
        id: 3,
        title: 'Mountain Trek',
        rating: 4.7,
        price: 99.99,
        duration: '5 days 4 nights',
        thumbnail: "https://travelwp.physcode.com/main-demo/wp-content/uploads/sites/7/2016/11/c9f347c4-8b17-47b5-8594-a6947299d51f-430x323.jpg"
      },
      {
        id: 4,
        title: 'Mountain Trek',
        rating: 4.7,
        price: 99.99,
        duration: '5 days 4 nights',
        thumbnail: "https://travelwp.physcode.com/main-demo/wp-content/uploads/sites/7/2016/11/c9f347c4-8b17-47b5-8594-a6947299d51f-430x323.jpg"
      },
      {
        id: 5,
        title: 'Mountain Trek',
        rating: 4.7,
        price: 99.99,
        duration: '5 days 4 nights',
        thumbnail: "https://travelwp.physcode.com/main-demo/wp-content/uploads/sites/7/2016/11/c9f347c4-8b17-47b5-8594-a6947299d51f-430x323.jpg"
      },
      {
        id: 6,
        title: 'Mountain Trek',
        rating: 4.7,
        price: 99.99,
        duration: '5 days 4 nights',
        thumbnail: "https://travelwp.physcode.com/main-demo/wp-content/uploads/sites/7/2016/11/c9f347c4-8b17-47b5-8594-a6947299d51f-430x323.jpg"
      },
      {
        id: 7,
        title: 'Mountain Trek',
        rating: 4.7,
        price: 99.99,
        duration: '5 days 4 nights',
        thumbnail: "https://travelwp.physcode.com/main-demo/wp-content/uploads/sites/7/2016/11/c9f347c4-8b17-47b5-8594-a6947299d51f-430x323.jpg"
      },
      {
        id: 8,
        title: 'Mountain Trek',
        rating: 4.7,
        price: 99.99,
        duration: '5 days 4 nights',
        thumbnail: "https://travelwp.physcode.com/main-demo/wp-content/uploads/sites/7/2016/11/c9f347c4-8b17-47b5-8594-a6947299d51f-430x323.jpg"
      },
    ]
  }
}
