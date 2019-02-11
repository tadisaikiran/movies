import { Component, OnInit } from '@angular/core';
import { MovieService } from './services/movie-display.service';

@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.css']
})
export class MovieDisplayComponent implements OnInit {

  movieList: any;
  searchVal: string;
  pagedItems: any;
  pager: any;
  filteredList: any;
  movieDetail: any;
  errMsg: any;

  constructor(
    private movieService: MovieService) { }

  ngOnInit() {
  }

  getMovieList(searchValue: string): void {
    console.log(searchValue);
    this.searchVal = searchValue;
    this.movieService.getMovies(searchValue).subscribe((res: any) => {
      if (res.Response && res && res.Search && res.Search.length > 0) {
        this.errMsg = '';
        this.movieList = res.Search;
      } else {
        this.movieList = null;
        this.errMsg = res.Error;
      }
    });
  }

  goToMoviedetails(movie: any) {
    this.movieDetail = movie;
  }

  backToSearch() {
    this.movieDetail = null;
  }

}
