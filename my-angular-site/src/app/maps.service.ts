import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface Location {
  latitude: string;
  longitude: string;
}

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }

  getLocation() {
    return this.http.get('https://ipapi.co/66.210.1.198/city/')
  }
}
