import { Component } from '@angular/core';
import { SongListComponent } from './components/song-list/song-list.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true, 
  template: '<app-song-list></app-song-list>', 
  imports: [SongListComponent,HttpClientModule], 
})
export class AppComponent {}
