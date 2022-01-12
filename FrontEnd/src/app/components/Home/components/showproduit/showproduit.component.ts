import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showproduit',
  templateUrl: './showproduit.component.html',
  styleUrls: ['./showproduit.component.css']
})
export class ShowproduitComponent implements OnInit {

  produit:any=[];
  pdt:any;
 

  constructor(private service:SharedService,private route: ActivatedRoute) { }
  

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getPdt(id).subscribe(p => {
      console.log(p);
      this.produit = p;
      this.pdt = this.produit[0]
    })
  }
}
