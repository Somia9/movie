import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

  getTrending(mediaType:any):Observable<any>
  {
  return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=3a9abe1d76d78eb21e5249a979b2c78d`)
  }

  getMovieDetials(id:any):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=3a9abe1d76d78eb21e5249a979b2c78d&language=en-US`)
  }

  getTvDetials(id:any):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=3a9abe1d76d78eb21e5249a979b2c78d&language=en-US`)
  }

  getMoviesByPagination(pageNumber:number):Observable<any>
  {
  return this._HttpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=3a9abe1d76d78eb21e5249a979b2c78d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`)
  }

  getTvByPagination(pageNumber:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/tv?api_key=3a9abe1d76d78eb21e5249a979b2c78d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`)
  }


}












//apiKey =3a9abe1d76d78eb21e5249a979b2c78d ;
//https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=3a9abe1d76d78eb21e5249a979b2c78d

//https://api.themoviedb.org/3/movie/550?api_key=3a9abe1d76d78eb21e5249a979b2c78d
