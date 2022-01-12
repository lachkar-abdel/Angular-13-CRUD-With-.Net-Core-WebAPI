import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-cat',
  templateUrl: './add-edit-cat.component.html',
  styleUrls: ['./add-edit-cat.component.css']
})
export class AddEditCatComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() cat:any;
  Id_Cat : string | undefined;
  Cat_Name:string | undefined;
  cat_Description:string | undefined;


  ngOnInit(): void {
    this.Id_Cat=this.cat.Id_Cat;
    this.Cat_Name=this.cat.Cat_Name;
    this.cat_Description=this.cat.cat_Description;
  }

  addCategorie(){
    var val = {IdCat:this.Id_Cat,
               CatName:this.Cat_Name,
                CatDescription:this.cat_Description};
    this.service.addCategorie(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCategorie(){
    var val = {IdCat:this.Id_Cat,
      CatName:this.Cat_Name,
      CatDescription:this.cat_Description
    };
    this.service.updateCategorie(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
