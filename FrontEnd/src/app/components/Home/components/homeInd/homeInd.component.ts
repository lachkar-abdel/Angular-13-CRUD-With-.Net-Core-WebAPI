import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-homeInd',
  templateUrl: './homeInd.component.html',
  styleUrls: ['./homeInd.component.css']
})
export class HomeIndComponent implements OnInit {
  ProduitList: any[] = [];
  Activateshowproduit:boolean=false;
  maxlentgth: number = 0;
  firstPart = 0;
  scdPart = 0;



  constructor(private service:SharedService) { }

  returnUrl(img: string) {
    return environment.urlbackend + img;
  }

  ngOnInit(): void {
    this.refreshPdtList();
    this.maxlentgth = this.ProduitList.length;
    //console.log("🚀 ~ file: homeInd.component.ts ~ line 38 ~ HomeIndComponent ~ ngOnInit ~ this.maxlentgth", this.maxlentgth)
    this.firstPart = Math.round(this.maxlentgth / 3);
    //console.log("🚀 ~ file: homeInd.component.ts ~ line 40 ~ HomeIndComponent ~ ngOnInit ~ this.firstPart", this.firstPart)
    this.scdPart = this.firstPart *2;
    //console.log("🚀 ~ file: homeInd.component.ts ~ line 42 ~ HomeIndComponent ~ ngOnInit ~ this.scdPart", this.scdPart)

  }
  refreshPdtList(){
    this.service.getPdtList().subscribe((data):any => {
      this.ProduitList = data;
    });
  }


  filterProduct() {
    if (this.service.category) {
    return this.ProduitList.filter(p => p.categorie === this.service.category)
    }
    return this.ProduitList;
  }



  catretu()
  {
    return this.service.category ? this.service.category : 'ALL';

  }


}
