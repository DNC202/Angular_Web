import { Component } from '@angular/core';
import { TourListComponent } from '../../components/tour-list/tour-list.component';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [
    TourListComponent
  ],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.scss'
})
export class ToursComponent {
  
}
