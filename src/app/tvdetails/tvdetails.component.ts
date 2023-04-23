import { Component } from '@angular/core';
import { MoviesService } from './../movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.scss']
})
export class TvdetailsComponent {
  constructor(private _ActivatedRoute:ActivatedRoute ,private _MoviesService:MoviesService){}

   tvId:string='';
   tvDetails:any;
   imgPerfix:string='https://image.tmdb.org/t/p/w500';

  ngOnInit(): void {

   this.tvId= this._ActivatedRoute.snapshot.params['id'];
   this._MoviesService.getTvDetials(this.tvId).subscribe({
    next:(response)=>{
      this.tvDetails=response;
    }
   })

  }

}
