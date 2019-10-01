import { Component, OnInit } from '@angular/core';

/* Services */
import { GaleryService } from "../../../Services/Galery/galery.service";

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.sass']
})
export class GaleryComponent implements OnInit {

  photos = []
  constructor( private galeryServices: GaleryService ) { }

  ngOnInit() {
    
    this.galeryServices.getPhotos()
      .subscribe(res => {
        console.log(res);
        this.photos = res['photos']
        console.log(this.photos);
        
      },
      error => {
        console.log(error);
      })
      /* */
  }
  

}
