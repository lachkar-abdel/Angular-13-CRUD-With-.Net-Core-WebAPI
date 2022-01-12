import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-show-cat',
  templateUrl: './show-cat.component.html',
  styleUrls: ['./show-cat.component.css']
})
export class ShowCatComponent implements OnInit {

  constructor(private service:SharedService,private authService: AuthService) { }

  CategorieList:any=[];

  ModalTitle:string | undefined;
  ActivateAddEditCatComp:boolean=false;
  cat:any;
  logout(): void {
    this.authService.Logout();
  }
  ngOnInit(): void {
    this.refreshCatList();
  }

  addClick(){
    this.cat={
      Id_Cat:0,
      Cat_Name:"",
      cat_Description:""
    }
    this.ModalTitle="Ajouet Categorie";
    this.ActivateAddEditCatComp=true;

  }

  editClick(item: any){
    this.cat=item;
    this.ModalTitle="Modifier Categorie";
    this.ActivateAddEditCatComp=true;
  }

  deleteClick(item: { Id_Cat: any; }){
    if(confirm('Voulez-vous vraiment supprimer cette Categorie ???')){
      this.service.deleteCategorie(item.Id_Cat).subscribe(data=>{
        alert(data.toString());
        this.refreshCatList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditCatComp=false;
    this.refreshCatList();
  }

  refreshCatList(){
    this.service.getCatList().subscribe(data=>{
      this.CategorieList=data;
    });
  }

}
