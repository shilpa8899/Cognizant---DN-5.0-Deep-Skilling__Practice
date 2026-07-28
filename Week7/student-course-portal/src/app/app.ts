import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('student-course-portal');
}
