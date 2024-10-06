import { Routes } from '@angular/router';
import { SongListComponent } from './components/song-list/song-list.component';
import { PreferencesComponent } from './components/preferences/preferences.component';

export const routes: Routes = [
  { path: 'songs', component: SongListComponent },
  { path: 'preferences', component: PreferencesComponent },
  { path: '', redirectTo: '/songs', pathMatch: 'full' }
];
