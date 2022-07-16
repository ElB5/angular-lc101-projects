import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Best Photos EVER';
  image1 = 'https://m.media-amazon.com/images/I/7182Zs7oKNL._AC_SX569_.jpg';
  image2 = 'https://www.quill.com/is/image/Quill/m001159588_s7?$img400$';


  constructor() { }

  ngOnInit() {
  }

}