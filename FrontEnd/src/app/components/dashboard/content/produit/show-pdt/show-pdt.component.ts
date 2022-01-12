import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-show-pdt',
  templateUrl: './show-pdt.component.html',
  styleUrls: ['./show-pdt.component.css']
})
export class ShowPdtComponent implements OnInit {


  constructor(private service:SharedService,private authService: AuthService) { }
  

  ProduitList:any=[];

  ModalTitle:string | undefined;
  ActivateAddEditPdtComp:boolean=false;
  pdt:any;

  ProduitIdFilter:string="";
  ProduitTitleFilter:string="";
  ProduitListWithoutFilter:any=[];
  logout(): void {
    this.authService.Logout();
  }
  ngOnInit(): void {
    this.refreshPdtList();
  }

  addClick(){
    this.pdt={
      id:0,
      title:"",
      content:"",
      categorie:"",
      posted_on:"",
      main_image:""
    }
    this.ModalTitle="Ajouter Produit";
    this.ActivateAddEditPdtComp=true;

  }

  editClick(item: any){
    this.pdt=item;
    this.ModalTitle="Modifier Produit";
    this.ActivateAddEditPdtComp=true;
  }

  deleteClick(item: { id: any; }){
    if(confirm('Are you sure??')){
      this.service.deleteProduit(item.id).subscribe(data=>{
        alert(data.toString());
        this.refreshPdtList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditPdtComp=false;
    this.refreshPdtList();
  }


  refreshPdtList(){
    this.service.getPdtList().subscribe(data=>{
      this.ProduitList=data;
      this.ProduitListWithoutFilter=data;
    });
  }

  FilterFn(){
    var ProduitIdFilter = this.ProduitIdFilter;
    var ProduitTitleFilter = this.ProduitTitleFilter;

    this.ProduitList = this.ProduitListWithoutFilter.filter(function (el: { id: { toString: () => string; }; title: { toString: () => string; }; }){
        return el.id.toString().toLowerCase().includes(
          ProduitIdFilter.toString().trim().toLowerCase()
        )&&
        el.title.toString().toLowerCase().includes(
          ProduitTitleFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop: string | number,asc: any){
    this.ProduitList = this.ProduitListWithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}


