import { Component, OnInit } from '@angular/core';

import { Laptop } from '../laptop';
import { LaptopService } from '../laptop.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-laptop-details',
  templateUrl: './laptop-details.component.html',
  styleUrls: ['./laptop-details.component.css']
})
export class LaptopDetailsComponent implements OnInit {
  id:number;
laptop:Laptop;
  constructor(private lapservice:LaptopService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];
    this.laptop=new Laptop();
    this.lapservice.viewById(this.id).subscribe(data=>{this.laptop=data;
    },
   error=>console.log(error));
}
}