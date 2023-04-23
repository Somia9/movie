import { Component } from '@angular/core';
import { MoviesService } from './../movies.service';


@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TvshowComponent {
  constructor(private _MoviesService:MoviesService){};
  trendingTv:any[]=[];
  imgPerfix:string='https://image.tmdb.org/t/p/w500';
  pages:number[]=[];
  pagesNumber:number=20;
  term:string='';

  ngOnInit(): void {
    this.pages= new Array(this.pagesNumber).fill('').map((x,i)=>i+1);

    this._MoviesService.getTvByPagination(1).subscribe({
      next:(response)=> this.trendingTv=response.results
    })

  }

  test(pageNumber:number):void{
    this._MoviesService.getTvByPagination(pageNumber).subscribe({
      next:(response)=> this.trendingTv=response.results
    })

  }


}
