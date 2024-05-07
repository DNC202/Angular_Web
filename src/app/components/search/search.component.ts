import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { Destination } from '../../models/destination/destination';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit{

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
  selectedDestination:string = '';
  constructor(private route:ActivatedRoute, private router:Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['selectedDestination'])
        this.selectedDestination = params['selectedDestination'];
    })
  }

  search(): void {
    if(this.selectedDestination){
      this.router.navigateByUrl('/tours/' + this.selectedDestination);
    }
    console.log(this.selectedDestination);

  }
}
