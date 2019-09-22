import { Component, OnInit } from '@angular/core';

import { GaleryService } from "../../../Services/Galery/galery.service";

import { MzButtonModule } from 'ngx-materialize'

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}

@Component({
  selector: 'app-galery-form',
  templateUrl: './galery-form.component.html',
  styleUrls: ['./galery-form.component.sass']
})
export class GaleryFormComponent implements OnInit {

  file: File
  photoSelected: string | ArrayBuffer

  constructor( private galeryService: GaleryService) { }

  ngOnInit( ) {
  }

  onPhotoSelected(event: HtmlInputEvent): void {
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0]
      console.log(this.file);
      
      //Image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result
      reader.readAsDataURL(this.file)
    }
  }

  uploadPhoto(title: HTMLInputElement, description:HTMLTextAreaElement){
    console.log(title.value);
    console.log(description.value);

    
    this.galeryService.createPhoto(title.value, description.value, this.file)
      .subscribe(
        res => {
          console.log(res);
          //this.router.navigate(['/photos'])
        },
        err => console.log(err)
       );
    /* */
  }

}
