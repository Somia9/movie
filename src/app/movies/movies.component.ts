import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
constructor(private _MoviesService:MoviesService){}

trendingMovies:any[]=[];
pages:number[]=[] ;
pageNumber:number=20;
imgPerfix:string='https://image.tmdb.org/t/p/w500';
term:string='';


ngOnInit(): void {
this.pages=new Array(this.pageNumber).fill('').map( (x,i) =>i+1);
console.log(this.pages)
this._MoviesService.getMoviesByPagination(3).subscribe({

next:(response)=> this.trendingMovies=response.results
})
}
test(pageNumber:number){
  this._MoviesService.getMoviesByPagination(pageNumber).subscribe({

    next:(response)=> this.trendingMovies=response.results
    });
}
}
