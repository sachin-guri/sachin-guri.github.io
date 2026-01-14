import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PolicyComponent } from './pages/policy/policy.component';
import { MeDoingRnDComponent } from './pages/me-doing-rn-d/me-doing-rn-d.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Sachin Guri - Home',
  },
  { path: 'home', component: HomeComponent, title: 'Home - Sachin Guri' },
  {
    path: 'medoingrnd',
    component: MeDoingRnDComponent,
    title: 'R & D - Sachin Guri',
  },
  { path: 'snippets', component: HomeComponent, title: 'Snippets - Sachin Guri' },
  {
    path: 'policy',
    component: PolicyComponent,
    title: 'Privacy Policy - Sachin Guri',
  },
];
