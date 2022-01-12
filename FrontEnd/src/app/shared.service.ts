import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="https://localhost:5001/api";
readonly PhotoUrl = "https://localhost:5001/Images/";
readonly ImageProduct = "https://localhost:5001/Image/";
  category: string = '';

  constructor(private http:HttpClient) { }



  getCatList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Categorie');
  }

  addCategorie(val:any){
    return this.http.post(this.APIUrl+'/Categorie',val);
  }

  updateCategorie(val:any){
    return this.http.put(this.APIUrl+'/Categorie',val);
  }

  deleteCategorie(val:any){
    return this.http.delete(this.APIUrl+'/Categorie/'+val);
  }

  getPdtList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Produit');
  }

  getPdt(id:number){
    return this.http.get<any>(this.APIUrl+'/Produit/'+id);
  }

  addProduit(val:any){
    return this.http.post(this.APIUrl+'/Produit',val);
  }
  // addImageProduit(val:any, IdProduit:any){
  //   return this.http.post(this.APIUrl+'/ProduitImage',({IdProduit, val}));
  // }
  
  updateProduit(val:any){
    return this.http.put(this.APIUrl+'/Produit',val);
  }

  deleteProduit(val:any){
    return this.http.delete(this.APIUrl+'/Produit/'+val);
  }


  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Produit/SaveFile',val);
  }

  uploadImageOneByOne(val:any){
     return this.http.post(this.APIUrl+'/upload', val);
  }
  getAllCategorieNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Produit/getAllCategorieNames');
  }
}
