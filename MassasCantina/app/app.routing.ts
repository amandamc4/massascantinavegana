import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DobraListComponent } from './massas/dobra-list.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'massa', component: DobraListComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);