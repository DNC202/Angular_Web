import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { DestinationComponent } from '../../components/destination/destination.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    DestinationComponent    
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
