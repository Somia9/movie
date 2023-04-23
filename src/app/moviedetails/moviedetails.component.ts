import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent {
  constructor(private _ActivatedRoute:ActivatedRoute ,private _MoviesService:MoviesService){}

  movieId:string='';
  movieDetails:any;
  imgPerfix:string='https://image.tmdb.org/t/p/w500';

  ngOnInit(): void {

   this.movieId= this._ActivatedRoute.snapshot.params['id'];
   this._MoviesService.getMovieDetials(this.movieId).subscribe({
    next:(response)=>{
      this.movieDetails=response;
    }
   })

  }

}








// import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { MoviesService } from '../movies.service';



// @Component({
//   selector: 'app-moviesdetailes',
//   templateUrl: './moviesdetailes.component.html',
//   styleUrls: ['./moviesdetailes.component.scss']
// })
// export class MoviesdetailesComponent {

//   movieDetails:any;
//   movieId:string='';
//

// constructor(private _ActivatedRoute:ActivatedRoute,private _MoviesService:MoviesService){



//  };

// ngOnInit():void {

//   this.movieId = this._ActivatedRoute.snapshot.params['id'];
//   console.log(this.movieId)

//  this._MoviesService.getMovieDetials(this.movieId).subscribe((response)=>{this.movieDetails=response;})
// }

// }
