import { Component } from '@angular/core';
import { TourListComponent } from '../../components/tour-list/tour-list.component';
import { Destination } from '../../models/destination/destination';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Tour } from '../../models/tour/tour';
import { ToursService } from '../../services/tour/tours.service';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [
    TourListComponent,
    FormsModule,
    CommonModule
  ],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.scss'
})
export class ToursComponent {
  destinations:Destination[] = [
    {
      'id': 0,
      'name': 'Select Destination'
    },
    {
      'id': 1,
      'name': 'London'
    },
    {
      'id': 2,
      'name': 'Paris'
    },
    {
      'id': 3,
      'name': 'Amsterdam'
    },
    {
      'id': 4,
      'name': 'New York'
    },
  ];

  toursSearch:Tour[] = [];
  selectedDestination!:number;
  constructor(private tourService:ToursService, private route:ActivatedRoute, private router:Router) {}

  ngOnInit(): void {
    this.toursSearch = this.tourService.getAllTours();
    this.route.params.subscribe(params => {
      if(params['selectedDestination'])
        this.selectedDestination = params['selectedDestination'];
    });
  }

  search(): void {
    
    if(this.selectedDestination != 0) {
      // this.router.navigateByUrl('/tours/' + this.selectedDestination)
      this.toursSearch = this.tourService.getAllTours().filter((tour) => tour.destination == this.selectedDestination)
      console.log(this.toursSearch)
    }
    else {
      this.toursSearch = this.tourService.getAllTours();
    }
  }
}
