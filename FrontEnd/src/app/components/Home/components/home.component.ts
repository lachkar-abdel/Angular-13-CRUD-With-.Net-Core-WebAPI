
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
    selector: 'app-home-component',
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})

export class homeComponent implements OnInit {



    constructor(private service:SharedService) {
    }

    click(cat : string)
    {
       this.service.category = cat;
    }
    ngOnInit() {
       
    }


    
}

