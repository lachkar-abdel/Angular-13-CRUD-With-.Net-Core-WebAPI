import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-pdt',
  templateUrl: './add-edit-pdt.component.html',
  styleUrls: ['./add-edit-pdt.component.css']
})
export class AddEditPdtComponent implements OnInit {

  selectedFiles?: FileList | undefined ;
  previews: string[] = [];
  imgvar = null;
  rtnid = null;
  PhotoFilePath = 'assets/img/anon.png'
  display = 'none';
  ulpoadedFiles: any = [];
  imgId: any=0;
  target: any = {};
  files: any = {};
  event: any = {};
  developer: any = {};
  frontEndLanguages: any = [];
  backEndLanguages: any = [];
  selectedBackEndItems: any = [];
  selectedFrontEndItems: any = [];
  imageChangedEvent: any = '';
  croppedImage: any = '';
  currentProcessingImg: any = 0;

  finalImageList: any = [];
  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.loadProduitList();
   }

  openModal() {
       this.display = 'block';
  }

  onCloseHandled() {
    this.imageChangedEvent = null;
    this.display = 'none';
  }

  
  fileChangeEvent(event: any): void {
    
    //Processing selected Images 
    for (var i = 0; i < event.target.files.length; i++) {
      this.imageProcess(event, event.target.files[i]);
      this.imgvar = event;
    }
  }
  // setEvent(event: any) {
  //   this.imgvar = event;
  // }
  imageProcess(event: any, file: any) {
    //Setting images in our required format
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      this.imgId = this.imgId + 1;
      this.ulpoadedFiles.push({ imgId: this.imgId, imgBase64: reader.result, imgFile: file });
    };
  }

  //get a Image using Image Id to crop
  //cropping process done here 
  cropImage(imgId: any) {
    this.currentProcessingImg = imgId;
    var imgObj = this.ulpoadedFiles.find((x: { imgId: any; }) => x.imgId === imgId);
    //created dummy event Object and set as imageChangedEvent so it will set cropper on this image 
    var event = {
      target: {
        files: [imgObj.imgFile]
      }
    };
    this.imageChangedEvent = event;
    this.openModal();
  }

  //Save Cropped Image locally
  SaveCropedImage() {
    var imgObj = this.ulpoadedFiles.find((x: { imgId: any; }) => x.imgId === this.currentProcessingImg);
    imgObj.imgBase64 = this.croppedImage;
    this.onCloseHandled();
  }

  SaveAllImages() {
    this.finalImageList = null;
    this.ulpoadedFiles.forEach((imgObject: { imgBase64: any; }) => {

      this.finalImageList.push(imgObject.imgBase64);
    })
  }

  imageCropped(event: any) {
    this.croppedImage = event.base64;
  }
 
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }
  @Input() pdt:any;
  id:number | undefined;
  title:string | undefined;
  content:string | undefined;
  categorie:string | undefined;
  main_image:string | undefined;
  posted_on:string | undefined;
  CategorieList:any[] | undefined;

  

  loadProduitList(){
    this.service.getAllCategorieNames().subscribe((data:any)=>{
      this.CategorieList=data;
      this.id=this.pdt.id;
      this.title=this.pdt.title;
      this.content=this.pdt.content;
      this.categorie=this.pdt.categorie;
      this.main_image=this.pdt.main_image;
      this.posted_on=this.pdt.posted_on;
      this.PhotoFilePath=this.service.PhotoUrl+this.main_image;
    })
  }
 
  addProduit(){
    var val = {Id:this.id,
      Title:this.title,
      Content:this.content,
      categorie:this.categorie,
      MainImage:this.main_image,
      PostedOn:this.posted_on};
    this.uploadFiles(this.imgvar, val);
  }
  updateProduit(){
    var val = {Id:this.id,
      Title:this.title,
      Content:this.content,
      categorie:this.categorie,
      MainImage:this.main_image,
      PostedOn:this.posted_on};
   this.selectFiles(this.imgvar,val);
  }
  
  selectFiles(event: any, val: any): void{
    this.selectedFiles = event.target.files;
    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      var file=event.target.files[0];
      const formData:FormData=new FormData();
      formData.append('uploadedFile',file,file.name);
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);
      }
      let IdProduit: Object | null = null;
      this.service.UploadPhoto(formData).subscribe((data:any)=>{
        this.main_image=data.toString();
        this.PhotoFilePath=this.service.PhotoUrl+this.main_image; 
        val.MainImage = this.main_image;
        this.service.updateProduit(val).subscribe(res=>{
          IdProduit =res;
          console.log(res)
          for (let i = 0; i < numberOfFiles; i++) {
            if (i>0)  {
             this.upload(this.selectedFiles![i], IdProduit);
             console.log(IdProduit)
            }
          }
          alert(res.toString());
          });
      }) 
      console.log("msg")     
     

    } 
  }
  uploadFiles(event: any, val: any): void{
    this.selectedFiles = event.target.files;
    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      var file=event.target.files[0];
      const formData:FormData=new FormData();
      formData.append('uploadedFile',file,file.name);
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);
      }
      let IdProduit: Object | null = null;
      this.service.UploadPhoto(formData).subscribe((data:any)=>{
        this.main_image=data.toString();
        this.PhotoFilePath=this.service.PhotoUrl+this.main_image; 
        val.MainImage = this.main_image;
        console.log("ki")
        this.service.addProduit(val).subscribe(res=>{
      
          IdProduit =res;
          console.log(res)
          for (let i = 0; i < numberOfFiles; i++) {
            if (i>0)  {
             this.upload(this.selectedFiles![i], IdProduit);
             console.log(IdProduit)
            }
          }
           alert(res.toString());
        });
      }) 
      console.log("msg")     
     

    } 
  }
  upload(file:any, val:any) {
    const formData:FormData=new FormData();
    formData.append('idProd', val);
    formData.append('uploadedFile',file,file.name);
    this.service.uploadImageOneByOne(formData).subscribe(
      event => {
        console.log(event)
      },
      err => {
        console.log("Err")
      });
  }
}


function form(form: any, id: number) {
  throw new Error('Function not implemented.');
}



function IdProduit(formData: FormData, IdProduit: any) {
  throw new Error('Function not implemented.');
}

