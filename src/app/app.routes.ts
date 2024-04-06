import { SearchPageComponent } from './movies/pages/search-page/search-page.component';
import { Routes } from '@angular/router';
import { ListPageComponent } from './movies/pages/list-page/list-page.component';
import { MoviePageComponent } from './movies/pages/movie-page/movie-page.component';
// import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';


export const routes: Routes = [
  // { path: '', loadChildren: () => import('./movies/movies.module').then( m => m.MoviesModule )},
  // { path: '404', component: Error404PageComponent },
  // { path: '',redirectTo: 'movies', pathMatch: 'full'},
  // { path: '**', redirectTo: '404' }

  { path: 'search', component: SearchPageComponent},
  { path: 'list', component:  ListPageComponent},
  { path: ':id', component:  MoviePageComponent},
  { path: '**', redirectTo: 'search' },
];



