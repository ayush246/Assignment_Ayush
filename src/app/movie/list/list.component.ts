import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from 'angular-dark-mode';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  movieData: any = ''
  loadingData: boolean = true
  searchValue: string = ''
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  constructor(private movieService: MovieService, private toastr: ToastrService,
    private darkModeService: DarkModeService) { }

  ngOnInit(){
    this.getMovieDetails('https://demo.credy.in/api/v1/maya/movies/')
  }

  getMovieDetails(url: string){
    this.loadingData = true
    this.movieService.getMovieData(url).subscribe(
      (res: any) => {
        if (res) {
          this.movieData = res
        } else {
          this.toastr.error('Something went wrong.');
        }
        this.loadingData = false
      },
      (error) => {
        this.loadingData = false
        this.toastr.error('Something went wrong.');
      }
    );
  }

  switchModes(): void {
    this.darkModeService.toggle();
  }

}
