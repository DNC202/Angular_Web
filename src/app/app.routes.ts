import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ToursComponent } from './pages/tours/tours.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'tours', component: ToursComponent}
];
