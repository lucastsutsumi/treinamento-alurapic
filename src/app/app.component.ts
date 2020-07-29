import { Component, OnInit } from "@angular/core";
import { PhotoService } from "./photos/photo/photo.service";
import { Photo } from "./photos/photo/photo";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit{
  photos: Photo[] = [
    {
      id: 1,
      postDate: new Date(),
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Sultan_the_Barbary_Lion.jpg/440px-Sultan_the_Barbary_Lion.jpg",
      description: 'Leão',
      allowComments: true,
      likes: 3,
      comments: 2,
      userId: 1,
    },
  ];

  constructor(private photoService: PhotoService) {}
  
  ngOnInit():void {
    // this.photoService
    //   .listFromUser("flavio")
    //   .subscribe(photos => this.photos = photos);
    
  }
}

