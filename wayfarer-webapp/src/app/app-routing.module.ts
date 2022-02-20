import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CitiesComponent } from './components/cities/cities.component';
import { PostsComponent } from './posts/posts.component';
// import { SearchBarComponent } from './components/search-bar/search-bar.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cities', component: CitiesComponent},
  { path: 'cities/:id', component: PostsComponent},
  { path: 'cities/:id/posts/:id', component: PostsComponent},
  { path: 'search/:city-search', component: HomeComponent },
     // redirect to home
     { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
