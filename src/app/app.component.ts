import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { JokeService } from './joke.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  jokes: any[] = [];

  constructor(private jokeService: JokeService) {}

  getJokes() {
    this.jokeService.getJokes()
      .subscribe(data => {
        this.jokes = [data];
      });
  }
}
