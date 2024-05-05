import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ToursComponent } from './pages/tours/tours.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'tours', component: ToursComponent},
    { path: 'login', component: LoginComponent}
];
