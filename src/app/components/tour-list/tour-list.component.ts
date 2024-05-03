import { Component, OnInit } from '@angular/core';
import { Tour } from '../../models/tour/tour';
import { CommonModule } from '@angular/common';
import { ToursService } from '../../services/tour/tours.service';

@Component({
  selector: 'app-tour-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.scss'
})
export class TourListComponent implements OnInit{
  tours: Tour[] = [];

  constructor(private toursService: ToursService) { }

  ngOnInit() : void {
    this.tours = this.toursService.getAllTours();
  }
}
