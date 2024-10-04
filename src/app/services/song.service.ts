import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Song {
  id: number;
  name: string;
  artist: string;
  album: string;
  cover_url: string;
}

@Injectable({
  providedIn: 'root',
})
export class SongService {
  private apiUrl = 'http://127.0.0.1:8000/songs/'; // Asegúrate de que la API esté activa

  constructor(private http: HttpClient) {}

  getSongsByArtist(artist: string): Observable<Song[]> {
    return this.http.get<Song[]>(`${this.apiUrl}?artist=${artist}`);
  }
  
}
