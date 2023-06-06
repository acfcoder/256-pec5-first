import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from 'src/app/models/image.interface';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit { 
  image: Image | null;

  constructor(
    private imagesService: ImagesService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.image = null;
  }

  ngOnInit(): void {
    const identifier = this.activateRoute.snapshot.paramMap.get('id');
    console.log('Indentifier --> ', identifier);

    if (identifier) {

       this.imagesService.getImageById(identifier).subscribe((image) => {
      
      if (!image){
       this.router.navigateByUrl('/');
       return;
      }

      this.image = image;
      console.log ('Image --> ', this.image);
    })
    }

  }
}
