import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-epicerie',
  templateUrl: './epicerie.component.html',
  styleUrls: ['./epicerie.component.css']
})
export class EpicerieComponent implements OnInit {

  ProduitList : any ;
  constructor(private service:SharedService) { }
  

  
  returnUrl(img: string) {
    return environment.urlbackend + img;
  }

  ngOnInit(): void {
    this.refreshPdtList();
  }

  refreshPdtList(){
    this.service.GetCategorieEpicerie().subscribe((data):any => {
      this.ProduitList=data;
     
    });
  }
}
