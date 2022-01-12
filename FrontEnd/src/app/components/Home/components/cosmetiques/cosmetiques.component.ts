import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cosmetiques',
  templateUrl: './cosmetiques.component.html',
  styleUrls: ['./cosmetiques.component.css']
})
export class CosmetiquesComponent implements OnInit {
  ProduitList : any ;
  constructor(private service:SharedService) { }
  

  
  returnUrl(img: string) {
    return environment.urlbackend + img;
  }

  ngOnInit(): void {
    this.refreshPdtList();
  }

  refreshPdtList(){
    this.service.GetCategorieCosm().subscribe((data):any => {
      this.ProduitList=data;
      // console.log(data);
      // this.ProduitListWithoutFilter=data;
      //   this.service.getPdtList().subscribe((data):any => {
      //     data.forEach((elm)=>{
      //       if(elm.Categorie == "Deco"){
      //           this.ProduitList +=  data ;
      //       }
      //     });
      //     console.log(this.ProduitList);
    });
  }

}
