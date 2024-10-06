import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class PreferencesComponent implements OnInit {
  preferences: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getPreferences();
  }

  getPreferences() {
    // Clear the preferences array before adding new data to avoid duplication
    this.preferences = [];

    this.http.get<any[]>('http://127.0.0.1:8080/preferences').subscribe(
      (data) => {
        // Assign the data directly to the preferences array
        this.preferences = data;
      },
      (error) => {
        console.error('Error fetching preferences:', error);
      }
    );
  }
}
