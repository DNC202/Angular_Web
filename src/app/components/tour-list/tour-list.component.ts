import { Component, Input, OnInit } from '@angular/core';
import { Tour } from '../../models/tour/tour';
import { CommonModule } from '@angular/common';
import { ToursService } from '../../services/tour/tours.service';
import { ActivatedRoute } from '@angular/router';

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
  @Input() tours!: Tour[];
  constructor(private toursService: ToursService, private route:ActivatedRoute) { }

  ngOnInit() : void {
    // this.paginateTours();
  }


// Paginate tours
  // itemsPerPage = 6;
  // currentPage = 1;
  // paginatedTours:Tour[] = [];
  // paginateTours() {
  //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  //   const endIndex = startIndex + this.itemsPerPage;
  //   this.paginatedTours = this.tours.slice(startIndex, endIndex);
  // }

  // goToPage(page: number) {
  //   this.currentPage = page;
  //   this.paginateTours();
  // }

  // get totalPages() {
  //   return Math.ceil(this.tours.length / this.itemsPerPage);
  // }
}
