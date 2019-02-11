import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class MovieService {
    constructor(private _http: Http) { }

    getMovies(searchValue: string): Observable<any> {
        return this._http
          .get('http://www.omdbapi.com/?apikey=2d2c9886&s=' + searchValue).pipe(
            map(response => response.json())
          );
      }
}
