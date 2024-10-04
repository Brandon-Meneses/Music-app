import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Para el uso de ngModel
import { SongService } from '../../services/song.service';
import { HttpClientModule } from '@angular/common/http';

interface Song {
  id: number;
  name: string;
  artist: string;
  album: string;
  cover_url: string;
}

@Component({
  selector: 'app-song-list',
  standalone: true, // Indica que este es un componente independiente
  imports: [CommonModule, FormsModule, HttpClientModule], // Importa los módulos necesarios
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css'],
})
export class SongListComponent {
  songs: Song[] = [];
  artist: string = '';

  constructor(private songService: SongService) {}

  searchSongs(): void {
    if (this.artist) {
      this.songService.getSongsByArtist(this.artist).subscribe((data) => {
        this.songs = data;
      });
    }
  }
}
