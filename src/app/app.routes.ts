import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ToursComponent } from './pages/tours/tours.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TourListComponent } from './components/tour-list/tour-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'tours', component: ToursComponent, children: [
        { path: ':selectedDestination', component: ToursComponent}
    ]},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent}
];
