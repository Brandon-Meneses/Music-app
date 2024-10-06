import { Component } from '@angular/core';
import { SongListComponent } from './components/song-list/song-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, 
  templateUrl: './app.component.html', 
  imports: [NavbarComponent,RouterOutlet,SongListComponent,HttpClientModule], 
})
export class AppComponent {}
