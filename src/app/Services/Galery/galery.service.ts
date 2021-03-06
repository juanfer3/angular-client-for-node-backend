import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GaleryService {

  URI = 'http://localhost:3000/photos'

  constructor( private http: HttpClient ) { }

  createPhoto(title: string, description: string , photo: File){
    const fd = new FormData
    fd.append('title', title);
    fd.append('description', description);
    fd.append('image', photo)

    console.log(fd.get('images'));
    

    return this.http.post(this.URI, fd);

  }

  getPhotos(){
    
    
    const headers = new HttpHeaders().set('a-access-token', localStorage.getItem('token') );
    return this.http.get(this.URI, { headers: headers});
  }

}
